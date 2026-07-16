import * as React from "react"

import { cn } from "@/lib/utils"

/** Page header used at the top of every example. */
export function ExampleHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <header className="space-y-1">
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </header>
  )
}

/** A phone mockup that frames a mobile example on wider screens. */
export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="mx-auto w-full max-w-[430px]">
      <div className="overflow-hidden rounded-[2rem] border bg-muted/40 shadow-[var(--shadow-card)] sm:p-2">
        <div
          className={cn(
            "flex min-h-[720px] flex-col overflow-hidden rounded-[1.6rem] bg-background",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
