import type { MDXComponents } from 'mdx/types'
import type { ComponentPropsWithoutRef } from 'react'
import Image from 'next/image'
import { highlight } from 'sugar-high'
import { Mermaid } from '@/components/ui/mermaid'

const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  '/laax/cover.jpg': { width: 2400, height: 1600 },
  '/laax/visitor-chart.png': { width: 2398, height: 1024 },
  '/laax/sanity.webp': { width: 2000, height: 1204 },
  '/laax/shop.webp': { width: 2000, height: 1200 },
  '/laax/map.webp': { width: 2200, height: 1329 },
}

function MdxImage({ src, alt = '' }: ComponentPropsWithoutRef<'img'>) {
  if (typeof src !== 'string') return null

  const dimensions = IMAGE_DIMENSIONS[src] ?? { width: 1600, height: 900 }

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      sizes="(max-width: 768px) calc(100vw - 40px), 720px"
      priority={src === '/laax/cover.jpg'}
      className="border-border h-auto w-full rounded-lg border"
    />
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Mermaid,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <MdxImage src={src} alt={alt} />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    img: MdxImage,
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
