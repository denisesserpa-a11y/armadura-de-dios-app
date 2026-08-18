import { useEffect } from 'react'
import { AccessGate } from './components/AccessGate'
import { BottomBar } from './components/BottomBar'
import { Home } from './screens/Home'
import { Book } from './screens/Book'
import { ChapterDetail } from './screens/ChapterDetail'
import { Ritual } from './screens/Ritual'
import { BiblePlan } from './screens/BiblePlan'
import { Devotional } from './screens/Devotional'
import { Videos } from './screens/Videos'
import { Progress } from './screens/Progress'
import { useLocalStorage } from './hooks/useLocalStorage'
import { chapters } from './data/chapters'
import { ritualBlocks } from './data/ritual'
import { todayStr, computeStreak } from './utils/date'

export type Screen =
  | 'home'
  | 'book'
  | 'chapter'
  | 'ritual'
  | 'plan'
  | 'devotional'
  | 'videos'
  | 'progress'

const allStepIds = ritualBlocks.flatMap((b) => b.steps.map((s) => s.id))

export default function App() {
  const [unlocked, setUnlocked] = useLocalStorage('armadura_unlocked', false)
  const [screen, setScreen] = useLocalStorage<Screen>('armadura_screen', 'home')
  const [selectedChapterId, setSelectedChapterId] = useLocalStorage<string | null>(
    'armadura_selected_chapter',
    null
  )

  const [readIds, setReadIds] = useLocalStorage<Record<string, boolean>>('armadura_read_chapters', {})

  const [ritualToday, setRitualToday] = useLocalStorage<{ date: string; steps: Record<string, boolean> }>(
    'armadura_ritual_today',
    { date: todayStr(), steps: {} }
  )
  const [ritualCompletedDays, setRitualCompletedDays] = useLocalStorage<string[]>(
    'armadura_ritual_completed_days',
    []
  )

  const [bibleStartDate, setBibleStartDate] = useLocalStorage<string | null>('armadura_bible_start', null)
  const [bibleCompletedDays, setBibleCompletedDays] = useLocalStorage<Record<number, boolean>>(
    'armadura_bible_days',
    {}
  )

  const [journalText, setJournalText] = useLocalStorage('armadura_journal', '')

  // rollover diario del ritual: si cambió el día, reinicia los checks (el progreso ya fue
  // contabilizado en tiempo real cuando el usuario completó todos los pasos)
  useEffect(() => {
    if (ritualToday.date !== todayStr()) {
      setRitualToday({ date: todayStr(), steps: {} })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function toggleRead(id: string) {
    setReadIds((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function toggleRitualStep(id: string) {
    setRitualToday((prev) => {
      const nextSteps = { ...prev.steps, [id]: !prev.steps[id] }
      const allDone = allStepIds.every((sid) => nextSteps[sid])
      if (allDone && !ritualCompletedDays.includes(prev.date)) {
        setRitualCompletedDays((days) => [...days, prev.date])
      }
      return { ...prev, steps: nextSteps }
    })
  }

  const allDoneToday = allStepIds.length > 0 && allStepIds.every((sid) => ritualToday.steps[sid])
  const ritualStreak = computeStreak(ritualCompletedDays)
  const bibleDaysReadCount = Object.values(bibleCompletedDays).filter(Boolean).length

  function toggleBibleDay(day: number) {
    setBibleCompletedDays((prev) => ({ ...prev, [day]: !prev[day] }))
  }

  function goHome() {
    setScreen('home')
    setSelectedChapterId(null)
  }

  function openChapter(id: string) {
    setSelectedChapterId(id)
    setScreen('chapter')
  }

  if (!unlocked) {
    return <AccessGate onUnlock={() => setUnlocked(true)} />
  }

  return (
    <div className="min-h-screen bg-vitela-50 text-tinta-900">
      <div className="max-w-md mx-auto">
        {screen === 'home' && <Home onNavigate={setScreen} />}

        {screen === 'book' && (
          <Book onBack={goHome} onOpenChapter={openChapter} readIds={readIds} />
        )}

        {screen === 'chapter' && selectedChapterId && (
          <ChapterDetail
            chapterId={selectedChapterId}
            onBack={() => setScreen('book')}
            onOpenChapter={openChapter}
            readIds={readIds}
            onToggleRead={toggleRead}
          />
        )}

        {screen === 'ritual' && (
          <Ritual
            onBack={goHome}
            stepsToday={ritualToday.steps}
            onToggleStep={toggleRitualStep}
            allDoneToday={allDoneToday}
            streak={ritualStreak}
          />
        )}

        {screen === 'plan' && (
          <BiblePlan
            onBack={goHome}
            startDate={bibleStartDate}
            onStart={() => setBibleStartDate(todayStr())}
            completedDays={bibleCompletedDays}
            onToggleDay={toggleBibleDay}
          />
        )}

        {screen === 'devotional' && (
          <Devotional onBack={goHome} journalText={journalText} onChangeJournal={setJournalText} />
        )}

        {screen === 'videos' && <Videos onBack={goHome} />}

        {screen === 'progress' && (
          <Progress
            onBack={goHome}
            chaptersRead={Object.values(readIds).filter(Boolean).length}
            totalChapters={chapters.length}
            ritualStreak={ritualStreak}
            bibleDaysRead={bibleDaysReadCount}
          />
        )}
      </div>

      <BottomBar onHome={goHome} isHome={screen === 'home'} />
    </div>
  )
}
