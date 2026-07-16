import Link from "next/link"
import { ArrowLeft, Smartphone, Monitor, Blocks } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Logo } from "@/components/brand/logo"
import { examples } from "@/components/shell/examples"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-16 px-6 py-16">
      {/* Hero */}
      <section className="space-y-6">
        <Logo />
        <Badge variant="secondary" className="gap-1.5">
          <span className="size-1.5 rounded-full bg-success" />
          دیزاین سیستم داخلی
        </Badge>

        <h1 className="text-5xl font-black leading-[1.15] sm:text-6xl">
          دیزاین سیستم <span className="text-primary">اوستا</span>
          <span className="text-brand-accent">.</span>
        </h1>

        <p className="max-w-xl text-lg text-muted-foreground">
          پایه‌ی <span className="font-semibold text-foreground">shadcn/ui</span>،
          کاملاً کاستوم و راست‌به‌چپ. یک کانفیگ قابل‌حمل که در هر پروژه‌ای همین
          ظاهر را بازتولید می‌کند — همه‌چیز از توکن‌های یک فایل کنترل می‌شود.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <Link href="/preview">
              <Blocks />
              مشاهده کامپوننت‌ها
              <ArrowLeft />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/showcase">نمونه‌کارها</Link>
          </Button>
        </div>
      </section>

      {/* Brand tokens */}
      <section className="grid gap-5 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">رنگ اصلی</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <span className="size-10 rounded-xl bg-primary" />
            <code className="text-sm font-medium">#263e97</code>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">رنگ دوم</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <span className="size-10 rounded-xl bg-brand-accent" />
            <code className="text-sm font-medium">#FC9003</code>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">فونت</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="text-2xl font-bold">ایران‌یکان</p>
            <CardDescription>وزن متغیر · اعداد فارسی ۰۱۲۳۴۵۶۷۸۹</CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Examples */}
      <section className="space-y-5">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold">نمونه‌کارها</h2>
            <p className="text-muted-foreground">
              صفحات کامل ساخته‌شده با همین دیزاین‌سیستم.
            </p>
          </div>
          <Button variant="ghost" size="sm" asChild className="shrink-0">
            <Link href="/showcase">
              همه
              <ArrowLeft />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex) => (
            <Link key={ex.slug} href={`/showcase/${ex.slug}`} className="group">
              <Card className="h-full gap-3 transition-shadow hover:shadow-[0_8px_28px_-8px_rgb(38_62_151/0.22)]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{ex.title}</CardTitle>
                    <ArrowLeft className="size-4 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                  </div>
                  <CardDescription>{ex.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="gap-1.5">
                    {ex.device === "mobile" ? (
                      <>
                        <Smartphone className="size-3" />
                        موبایل
                      </>
                    ) : (
                      <>
                        <Monitor className="size-3" />
                        دسکتاپ
                      </>
                    )}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
