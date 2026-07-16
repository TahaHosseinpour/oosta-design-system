"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { previewGroups } from "@/components/preview/groups"

function NavLink({
  href,
  active,
  onNavigate,
  children,
}: {
  href: string
  active: boolean
  onNavigate?: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "flex items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      {children}
    </Link>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-4 pb-1 pt-5 text-xs font-bold text-muted-foreground/70 first:pt-0">
      {children}
    </p>
  )
}

export function AppNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-0.5">
      <SectionLabel>کامپوننت‌ها</SectionLabel>
      <NavLink
        href="/preview"
        active={pathname === "/preview"}
        onNavigate={onNavigate}
      >
        نمای کلی
      </NavLink>
      {previewGroups.map((group) => {
        const href = `/preview/${group.slug}`
        return (
          <NavLink
            key={group.slug}
            href={href}
            active={pathname === href}
            onNavigate={onNavigate}
          >
            {group.title}
          </NavLink>
        )
      })}
    </nav>
  )
}
