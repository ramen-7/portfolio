import { useState, useRef, useEffect } from 'react'

const PHRASE = 'Will you finger my butthole?'
const FINAL_PHRASE = 'શું તું મારો વેલેન્ટાઇન બનિશ?'
const TOTAL_LETTERS = PHRASE.replace(/\s+/g, '').length

const SECRET_QUESTION = 'Your name?'
const SECRET_ANSWER = 'Dhwiti'

const QUESTIONS = [
    {
        id: 1,
        question: 'What is green?',
        answer: 'Your asshole',
    },
    {
        id: 2,
        question: 'Can you _ promise me?',
        answer: 'Pinky',
    },
    {
        id: 3,
        question: 'Biggest creep we\'ve met:',
        answer: 'Assess',
    },
    {
        id: 4,
        question: 'Best friend at school:',
        answer: 'Principal',
    },
    {
        id: 5,
        question: 'My superpower:',
        answer: 'ADHD',
    },
    {
        id: 6,
        question: 'Your IQ:',
        answer: '4',
    },
    {
        id: 7,
        question: 'What do you have:',
        answer: 'Profound Mental Retardation',
    },
    {
        id: 8,
        question: 'Your bestie:',
        answer: 'Simran',
    },
    {
        id: 9,
        question: 'Our best friend:',
        answer: 'SSRIs',
    },
    {
        id: 10,
        question: 'One adjective for me:',
        answer: 'horny',
    },
    {
        id: 11,
        question: 'The best part about me according to you:',
        answer: 'my tongue',
    },
    {
        id: 12,
        question: 'Are you ready to say your',
        answer: 'I love yous',
    },
    {
        id: 13,
        question: 'What do you do in your sleep?',
        answer: 'fart',
    },
    {
        id: 14,
        question: 'Who has the better tihs?',
        answer: 'Shivam',
    },
    {
        id: 15,
        question: 'I am a ',
        answer: 'transgender woman',
    },
    {
        id: 16,
        question: 'My favorite thing to do',
        answer: 'ragebait you',
    },
    {
        id: 17,
        question: 'My AKCHUAL favorite thing to do',
        answer: 'Dhriti',
    },
    {
        id: 18,
        question: 'What is that _____? :D',
        answer: 'smell',
    },
    {
        id: 19,
        question: 'Who has the smellier farts',
        answer: 'Kartik and Manika',
    },
    {
        id: 20,
        question: 'What do I hate to do?',
        answer: 'Fold clothes',
    },
    {
        id: 21,
        question: 'Amintri or Thom\'s?',
        answer: 'Rameshwaram',
    },
    {
        id: 22,
        question: 'Best thing to eat',
        answer: 'Nuggets',
    },
    {
        id: 23,
        question: 'Funniest jokes',
        answer: 'Potty jokes',
    },
    {
        id: 24,
        question: 'Best type of music?',
        answer: 'Metal',
    },
    {
        id: 25,
        question: 'Who is the funnier one?',
        answer: 'Rohan Joshi',
    },
]


export default function Valentine() {
    const initialNoPosition = { top: '55%', left: '60%' }
    const [noPosition, setNoPosition] = useState(initialNoPosition)
    const noButtonRef = useRef(null)
    const [activated, setActivated] = useState(false)
    const [noHasMoved, setNoHasMoved] = useState(false)

    const [hasUnlocked, setHasUnlocked] = useState(false)
    const [gateInputChars, setGateInputChars] = useState(
        Array.from({ length: SECRET_ANSWER.length }, () => '')
    )
    const [gateError, setGateError] = useState('')

    const [lettersRevealed, setLettersRevealed] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1)
    const [inputChars, setInputChars] = useState([])
    const [lockedIndices, setLockedIndices] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [finalStage, setFinalStage] = useState(false)

    const handleMouseMove = (event) => {
        if (!hasUnlocked) return

        const buttonEl = noButtonRef.current
        if (!buttonEl) return

        const rect = buttonEl.getBoundingClientRect()
        const buttonCenterX = rect.left + rect.width / 2
        const buttonCenterY = rect.top + rect.height / 2

        const distance = Math.hypot(
            event.clientX - buttonCenterX,
            event.clientY - buttonCenterY
        )

        const escapeRadius = 70

        if (distance < escapeRadius) {
            if (!activated) {
                setActivated(true)
            }

            const newTop = `${5 + Math.random() * 90}%`
            const newLeft = `${5 + Math.random() * 90}%`
            setNoPosition({ top: newTop, left: newLeft })
            setNoHasMoved(true)
        }
    }

    const openNextQuestionModal = () => {
        setCurrentQuestionIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % QUESTIONS.length
            const rawAnswer = QUESTIONS[nextIndex].answer
            const answerLength = rawAnswer.replace(/\s+/g, '').length
            setInputChars(Array.from({ length: answerLength }, () => ''))
            setLockedIndices(Array.from({ length: answerLength }, () => false))
            setErrorMessage('')
            setShowModal(true)
            return nextIndex
        })
    }

    useEffect(() => {
        if (
            !hasUnlocked ||
            showModal ||
            lettersRevealed >= TOTAL_LETTERS
        ) return

        const timeoutId = setTimeout(() => {
            openNextQuestionModal()
        }, 5000)

        return () => clearTimeout(timeoutId)
    }, [hasUnlocked, showModal, lettersRevealed])

    const handleCharChange = (index, value) => {
        if (lockedIndices[index]) return

        const char = value.slice(-1)

        const rawAnswer =
            currentQuestionIndex >= 0
                ? QUESTIONS[currentQuestionIndex].answer
                : ''
        const flatCorrect = rawAnswer.replace(/\s+/g, '')
        const expectedChar = flatCorrect[index] || ''
        const isCorrect =
            char &&
            expectedChar &&
            char.toLowerCase() === expectedChar.toLowerCase()

        setInputChars((prev) => {
            const next = [...prev]
            next[index] = isCorrect ? expectedChar : char
            return next
        })

        if (isCorrect) {
            setLockedIndices((prev) => {
                const next = [...prev]
                next[index] = true
                return next
            })
        }

        setErrorMessage('')

        if (char) {
            let nextIdx = index + 1
            while (nextIdx < inputChars.length && lockedIndices[nextIdx]) {
                nextIdx += 1
            }
            if (nextIdx < inputChars.length) {
                const nextInput = document.getElementById(`answer-${nextIdx}`)
                if (nextInput) nextInput.focus()
            }
        }
    }

    const normalizeAnswer = (str) =>
        str.replace(/\s+/g, '').toLowerCase()

    const handleGateCharChange = (index, value) => {
        const char = value.slice(-1)
        setGateInputChars((prev) => {
            const next = [...prev]
            next[index] = char
            return next
        })
        setGateError('')

        if (char && index < gateInputChars.length - 1) {
            const nextInput = document.getElementById(`gate-answer-${index + 1}`)
            if (nextInput) nextInput.focus()
        }
    }

    const handleGateSubmit = () => {
        const userAnswer = gateInputChars.join('')
        if (normalizeAnswer(userAnswer) === normalizeAnswer(SECRET_ANSWER)) {
            setHasUnlocked(true)
            setGateError('')
        } else {
            setGateError('That is not the secret. Try again.')
        }
    }

    const handleSubmitAnswer = () => {
        if (currentQuestionIndex < 0) return

        const userAnswer = inputChars.join('')
        const correctAnswer = QUESTIONS[currentQuestionIndex].answer

        if (normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer)) {
            setLettersRevealed((prev) =>
                prev < TOTAL_LETTERS ? prev + 1 : prev
            )
            setShowModal(false)
            setErrorMessage('')
        } else {
            setErrorMessage('Nice try. Give it another shot.')
        }
    }

    const renderedPhrase = (() => {
        let letterIndex = 0
        return PHRASE.split('').map((ch, idx) => {
            if (ch === ' ') {
                return ' '
            }
            const visible = letterIndex < lettersRevealed
            letterIndex += 1
            return visible ? ch : '_'
        }).join('')
    })()

    const currentAnswer =
        currentQuestionIndex >= 0 ? QUESTIONS[currentQuestionIndex].answer : ''
    const currentAnswerWords = currentAnswer ? currentAnswer.split(' ') : []

    const displayPhrase = finalStage
        ? null
        : renderedPhrase

    const handleYesClick = () => {
        if (!finalStage && lettersRevealed >= TOTAL_LETTERS) {
            setFinalStage(true)
        } else {
            alert('I knew it ❤️')
        }
    }

    return (
        <div
            className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 dark:from-gray-900 dark:via-rose-900/60 dark:to-black flex items-center justify-center"
            onMouseMove={handleMouseMove}
        >
            <div className={`relative ${finalStage || lettersRevealed > 0 ? 'max-w-4xl' : 'max-w-md'} w-[90%] ${finalStage || lettersRevealed > 0 ? 'sm:w-[42rem]' : 'sm:w-[26rem]'} rounded-3xl bg-white/80 dark:bg-gray-900/90 shadow-2xl border border-pink-200/60 dark:border-rose-700/60 p-8 sm:p-10 text-center`}>
                <p className="text-sm uppercase tracking-[0.25em] text-rose-500 dark:text-rose-300 mb-4">
                    
                </p>

                <div className="mb-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-rose-500 dark:text-rose-300 mb-2">
                        Very original Thing im doing here
                    </p>
                    {finalStage ? (
                        <div className="flex flex-col gap-2">
                            <p className="font-mono text-lg sm:text-xl tracking-[0.25em] text-gray-900 dark:text-gray-100 whitespace-nowrap">
                                Just kidding,
                            </p>
                            <p className="font-mono text-lg sm:text-xl tracking-[0.25em] text-gray-900 dark:text-gray-100 whitespace-nowrap">
                                {FINAL_PHRASE}
                            </p>
                        </div>
                    ) : (
                        <p className="font-mono text-lg sm:text-xl tracking-[0.25em] text-gray-900 dark:text-gray-100 whitespace-nowrap">
                            {displayPhrase}
                        </p>
                    )}
                </div>

                {lettersRevealed >= TOTAL_LETTERS && (
                    <div className="relative h-28">
                        {!finalStage && !noHasMoved ? (
                            <div className="flex gap-4 justify-center items-center">
                                <button
                                    className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold shadow-lg shadow-rose-400/40 dark:shadow-rose-900/80 transition-transform transform hover:scale-105"
                                    onClick={handleYesClick}
                                >
                                    Yes
                                </button>
                                <button
                                    ref={noButtonRef}
                                    className="px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium shadow-md"
                                >
                                    No
                                </button>
                            </div>
                        ) : !finalStage && noHasMoved ? (
                            <div className="flex flex-col gap-4 items-center">
                                <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                                    Bitch you are stuck with me
                                </p>
                                <button
                                    className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold shadow-lg shadow-rose-400/40 dark:shadow-rose-900/80 transition-transform transform hover:scale-105"
                                    onClick={handleYesClick}
                                >
                                    Yes
                                </button>
                                <button
                                    ref={noButtonRef}
                                    style={{
                                        position: 'fixed',
                                        top: noPosition.top,
                                        left: noPosition.left,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                    className="px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium shadow-md"
                                >
                                    No
                                </button>
                            </div>
                        ) : (
                            <button
                                className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold shadow-lg shadow-rose-400/40 dark:shadow-rose-900/80 transition-transform transform hover:scale-105"
                                onClick={handleYesClick}
                            >
                                Yes
                            </button>
                        )}
                    </div>
                )}

            </div>
            {showModal && currentQuestionIndex >= 0 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="w-[90%] max-w-md rounded-2xl bg-white dark:bg-gray-900 border border-pink-200/70 dark:border-rose-700/70 p-6 shadow-2xl">
                        <p className="text-xs uppercase tracking-[0.25em] text-rose-500 dark:text-rose-300 mb-3">
                            Tiny Interrogation
                        </p>
                        <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-4">
                            {QUESTIONS[currentQuestionIndex].question}
                        </p>

                        <div className="flex flex-col items-center gap-2 mb-4">
                            {currentAnswerWords.map((word, wordIdx) => {
                                const offset = currentAnswerWords
                                    .slice(0, wordIdx)
                                    .reduce((sum, w) => sum + w.length, 0)
                                return (
                                    <div key={wordIdx} className="flex gap-2 justify-center">
                                        {word.split('').map((_, letterIdx) => {
                                            const idx = offset + letterIdx
                                            const ch = inputChars[idx] ?? ''
                                            const isLocked = lockedIndices[idx]
                                            return (
                                                <input
                                                    key={idx}
                                                    type="text"
                                                    maxLength={1}
                                                    id={`answer-${idx}`}
                                                    value={ch}
                                                    onChange={(e) => handleCharChange(idx, e.target.value)}
                                                    disabled={isLocked}
                                                    className={`w-8 h-8 sm:w-9 sm:h-9 text-center border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-400 dark:focus:ring-rose-600 ${
                                                        isLocked
                                                            ? 'border-emerald-400 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-900/40'
                                                            : 'border-gray-300 dark:border-gray-700'
                                                    }`}
                                                />
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>

                        {errorMessage && (
                            <p className="text-xs text-red-500 mb-3">
                                {errorMessage}
                            </p>
                        )}

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={handleSubmitAnswer}
                                className="px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold shadow-md"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {!hasUnlocked && (
                <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="w-[90%] max-w-md rounded-2xl bg-white dark:bg-gray-900 border border-pink-200/70 dark:border-rose-700/70 p-6 shadow-2xl">
                        <p className="text-xs uppercase tracking-[0.25em] text-rose-500 dark:text-rose-300 mb-3">
                            BEHEN KE LODEEEEEEEE
                        </p>
                        <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-4">
                            {SECRET_QUESTION}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {gateInputChars.map((ch, idx) => (
                                <input
                                    key={idx}
                                    type="text"
                                    maxLength={1}
                                    id={`gate-answer-${idx}`}
                                    value={ch}
                                    onChange={(e) => handleGateCharChange(idx, e.target.value)}
                                    className="w-8 h-8 sm:w-9 sm:h-9 text-center border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-400 dark:focus:ring-rose-600"
                                />
                            ))}
                        </div>

                        {gateError && (
                            <p className="text-xs text-red-500 mb-3">
                                {gateError}
                            </p>
                        )}

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={handleGateSubmit}
                                className="px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold shadow-md"
                            >
                                Unlock
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}