import * as React from "react"

import { cn } from "@/lib/utils"

/** A titled block that groups related examples on a preview page. */
export function Section({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="space-y-1">
        <h2 className="text-lg font-bold">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

/** A bordered surface that holds live examples, keeping every demo aligned. */
export function Stage({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4 rounded-2xl border bg-card p-6",
        className
      )}
    >
      {children}
    </div>
  )
}

/** A single labelled example inside a Stage. */
export function Item({
  label,
  children,
  className,
}: {
  label?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      {children}
      {label ? (
        <span className="text-xs text-muted-foreground">{label}</span>
      ) : null}
    </div>
  )
}
