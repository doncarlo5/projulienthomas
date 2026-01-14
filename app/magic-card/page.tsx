'use client'

import { useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { EMAIL, SOCIAL_LINKS } from '../data'
import { cn } from '../../lib/utils'

const BRUSH_SIZE = 28
const REVEAL_THRESHOLD = 0.42

type Point = { x: number; y: number }

function getPoint(event: PointerEvent<HTMLCanvasElement>): Point {
  const rect = event.currentTarget.getBoundingClientRect()
  return { x: event.clientX - rect.left, y: event.clientY - rect.top }
}

export default function MagicCardPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scratchAreaRef = useRef<HTMLDivElement>(null)
  const coinRef = useRef<HTMLButtonElement>(null)
  const isDrawingRef = useRef(false)
  const lastPointRef = useRef<Point | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [isCoverReady, setIsCoverReady] = useState(false)
  const [coinPosition, setCoinPosition] = useState<Point>({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const scratchArea = scratchAreaRef.current
    if (!canvas || !scratchArea) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const drawCover = () => {
      const rect = scratchArea.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = 'source-over'

      const width = rect.width
      const height = rect.height
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#f6e6a6')
      gradient.addColorStop(0.45, '#d4a046')
      gradient.addColorStop(1, '#e7c46d')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const radial = ctx.createRadialGradient(
        width * 0.2,
        height * 0.15,
        0,
        width * 0.4,
        height * 0.4,
        width,
      )
      radial.addColorStop(0, 'rgba(255, 255, 255, 0.35)')
      radial.addColorStop(0.6, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = radial
      ctx.fillRect(0, 0, width, height)

      ctx.globalAlpha = 0.25
      ctx.fillStyle = '#fff4c7'
      for (let i = 0; i < 200; i += 1) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * 2 + 0.5
        ctx.fillRect(x, y, size, size)
      }

      ctx.globalAlpha = 0.2
      ctx.fillStyle = '#b07a2a'
      for (let i = 0; i < 160; i += 1) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * 1.5 + 0.4
        ctx.fillRect(x, y, size, size)
      }

      ctx.globalAlpha = 1

      if (!isCoverReady) {
        setIsCoverReady(true)
      }
    }

    drawCover()
    const observer = new ResizeObserver(() => {
      drawCover()
    })
    observer.observe(scratchArea)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const scratchArea = scratchAreaRef.current
    if (!scratchArea) return
    const rect = scratchArea.getBoundingClientRect()
    setCoinPosition({
      x: rect.width - 60,
      y: rect.height - 60,
    })
  }, [])

  const scratchAt = (point: Point) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = BRUSH_SIZE

    const lastPoint = lastPointRef.current
    if (lastPoint) {
      ctx.beginPath()
      ctx.moveTo(lastPoint.x, lastPoint.y)
      ctx.lineTo(point.x, point.y)
      ctx.stroke()
    } else {
      ctx.beginPath()
      ctx.arc(point.x, point.y, BRUSH_SIZE / 2, 0, Math.PI * 2)
      ctx.fill()
    }

    lastPointRef.current = point
  }

  const checkReveal = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = canvas
    const imageData = ctx.getImageData(0, 0, width, height).data
    let cleared = 0
    const total = imageData.length / 4
    const step = 16

    for (let i = 3; i < imageData.length; i += 4 * step) {
      if (imageData[i] === 0) cleared += 1
    }

    const clearedRatio = cleared / (total / step)
    if (clearedRatio > REVEAL_THRESHOLD) {
      setIsRevealed(true)
      ctx.clearRect(0, 0, width, height)
    }
  }

  return (
    <main className="space-y-8">
      <section className="space-y-4">
        <p className="text-zinc-600 dark:text-zinc-400">
          Scratch the gold layer to reveal my identity card.
        </p>
      </section>

      <section className="relative">
        <div className="absolute -left-8 top-6 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,#f6e3a1,transparent_68%)] opacity-60 blur-2xl" />
        <div className="absolute -right-6 bottom-2 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,#f1c25a,transparent_70%)] opacity-50 blur-3xl" />

        <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_20px_80px_-50px_rgba(24,24,27,0.6)] ring-1 ring-zinc-200/70 dark:bg-zinc-950 dark:ring-zinc-800/60 sm:p-8">
          <div
            ref={scratchAreaRef}
            className={cn(
              'relative overflow-hidden rounded-2xl border border-zinc-200/70 p-4 dark:border-zinc-800/60',
              isCoverReady
                ? 'bg-zinc-50/60 dark:bg-zinc-900/50'
                : 'bg-[linear-gradient(135deg,#f6e6a6_0%,#d4a046_45%,#e7c46d_100%)]',
            )}
          >
            <div
              className={cn(
                'flex flex-col gap-6 transition-opacity duration-200',
                isCoverReady ? 'opacity-100' : 'opacity-0',
              )}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <img
                    src="/profile.jpg"
                    alt="Julien Thomas"
                    className="h-20 w-20 rounded-2xl object-cover ring-1 ring-zinc-200/60 dark:ring-zinc-800/60"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                      Julien Thomas
                    </p>
                    <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                      Full Stack Developer
                    </h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Product, motion, and clean UX.
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="grid gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center justify-between">
                      <span className="uppercase tracking-[0.2em] text-[11px] text-zinc-500 dark:text-zinc-500">
                        Origin
                      </span>
                      <span className="font-medium text-zinc-800 dark:text-zinc-200">
                        France
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="uppercase tracking-[0.2em] text-[11px] text-zinc-500 dark:text-zinc-500">
                        Email
                      </span>
                      <span className="font-medium text-zinc-800 dark:text-zinc-200">
                        {EMAIL}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="uppercase tracking-[0.2em] text-[11px] text-zinc-500 dark:text-zinc-500">
                        Social
                      </span>
                      <span className="font-medium text-zinc-800 dark:text-zinc-200">
                        {SOCIAL_LINKS[0]?.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 sm:grid-cols-4">
                <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/70 px-3 py-2 text-center dark:border-zinc-800 dark:bg-zinc-900/60">
                  Design
                </div>
                <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/70 px-3 py-2 text-center dark:border-zinc-800 dark:bg-zinc-900/60">
                  Frontend
                </div>
                <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/70 px-3 py-2 text-center dark:border-zinc-800 dark:bg-zinc-900/60">
                  Product
                </div>
                <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/70 px-3 py-2 text-center dark:border-zinc-800 dark:bg-zinc-900/60">
                  Motion
                </div>
              </div>
            </div>

            {!isRevealed && (
              <div className="absolute inset-0">
                {!isCoverReady && (
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#f6e6a6_0%,#d4a046_45%,#e7c46d_100%)]" />
                )}
                <canvas
                  ref={canvasRef}
                  className={cn(
                    'h-full w-full touch-pan-y transition-opacity duration-200',
                    isCoverReady ? 'opacity-100' : 'opacity-0',
                  )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full border border-white/50 bg-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/90 shadow-sm backdrop-blur-sm">
                    SCRATCH HERE
                  </span>
                </div>
                <button
                  ref={coinRef}
                  type="button"
                  className="absolute left-0 top-0 z-10 grid h-16 w-16 place-items-center rounded-full shadow-[0_10px_25px_-12px_rgba(0,0,0,0.6)] touch-pan-y select-none"
                  style={{
                    transform: `translate(${coinPosition.x - 32}px, ${coinPosition.y - 32}px)`,
                  }}
                  onPointerDown={(event) => {
                    isDrawingRef.current = true
                    event.currentTarget.setPointerCapture(event.pointerId)
                    const scratchArea = scratchAreaRef.current
                    if (!scratchArea) return
                    const rect = scratchArea.getBoundingClientRect()
                    const nextPosition = {
                      x: Math.min(
                        Math.max(event.clientX - rect.left, 24),
                        rect.width - 24,
                      ),
                      y: Math.min(
                        Math.max(event.clientY - rect.top, 24),
                        rect.height - 24,
                      ),
                    }
                    setCoinPosition(nextPosition)
                    lastPointRef.current = null
                    scratchAt(nextPosition)
                  }}
                  onPointerMove={(event) => {
                    if (!isDrawingRef.current) return
                    const scratchArea = scratchAreaRef.current
                    if (!scratchArea) return
                    const rect = scratchArea.getBoundingClientRect()
                    const nextPosition = {
                      x: Math.min(
                        Math.max(event.clientX - rect.left, 24),
                        rect.width - 24,
                      ),
                      y: Math.min(
                        Math.max(event.clientY - rect.top, 24),
                        rect.height - 24,
                      ),
                    }
                    setCoinPosition(nextPosition)
                    scratchAt(nextPosition)
                  }}
                  onPointerUp={() => {
                    isDrawingRef.current = false
                    lastPointRef.current = null
                    checkReveal()
                  }}
                  onPointerLeave={() => {
                    if (!isDrawingRef.current) return
                    isDrawingRef.current = false
                    lastPointRef.current = null
                    checkReveal()
                  }}
                >
                  <img
                    src="/coin.png"
                    alt="Coin"
                    className="h-full w-full rounded-full object-contain"
                    draggable={false}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
