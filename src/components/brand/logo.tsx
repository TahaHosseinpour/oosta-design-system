import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * LogoMark — the oosta brand mark (public/oosta-logo.png).
 * Square asset; size it with `className` (defaults to size-9).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/oosta-logo.png"
      alt="اوستا"
      width={72}
      height={72}
      priority
      className={cn("size-9 object-contain", className)}
    />
  )
}

/**
 * Logo — the brand mark plus the "اوستا" wordmark, as shown in the app
 * sidebar. Pass `showWordmark={false}` for the mark only.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className="size-6" />
      {showWordmark ? (
        <span className="text-lg font-extrabold tracking-wide">اوستا</span>
      ) : null}
    </span>
  )
}
