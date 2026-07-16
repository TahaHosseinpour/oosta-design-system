"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/brand/logo"
import { AppNav } from "@/components/shell/app-nav"

/**
 * AppShell — the responsive frame around every preview/showcase page.
 *  • Desktop (lg+): fixed right sidebar with the full nav.
 *  • Mobile: a sticky top bar with the logo and a hamburger that opens the
 *    same nav inside a Sheet.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="min-h-dvh">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-background/90 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/">
          <Logo />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="باز کردن منو">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-0">
            <SheetHeader className="border-b">
              <SheetTitle className="flex">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto p-3">
              <AppNav onNavigate={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-6 lg:grid-cols-[248px_1fr] lg:px-8 lg:py-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:sticky lg:top-8 lg:block lg:h-fit">
          <Link href="/" className="mb-6 inline-flex">
            <Logo />
          </Link>
          <AppNav />
        </aside>

        {/* Content */}
        <main className="min-w-0 space-y-12 pb-16">{children}</main>
      </div>
    </div>
  )
}
