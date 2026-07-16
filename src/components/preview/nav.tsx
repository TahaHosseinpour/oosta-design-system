"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { previewGroups } from "@/components/preview/groups"

/**
 * Preview sidebar — sits on the right (RTL). The active item is a solid blue
 * pill, echoing the active-nav pattern from the reference designs.
 */
export function PreviewNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1">
      <Link
        href="/preview"
        className={cn(
          "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
          pathname === "/preview"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )}
      >
        نمای کلی
      </Link>

      {previewGroups.map((group) => {
        const href = `/preview/${group.slug}`
        const active = pathname === href
        return (
          <Link
            key={group.slug}
            href={href}
            className={cn(
              "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {group.title}
          </Link>
        )
      })}
    </nav>
  )
}
