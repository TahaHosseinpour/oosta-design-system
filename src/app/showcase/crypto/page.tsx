import {
  Search,
  Star,
  TrendingUp,
  TrendingDown,
  Play,
  GraduationCap,
  ChevronLeft,
  BarChart3,
} from "lucide-react"

import { ExampleHeader } from "@/components/showcase/kit"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const nav = [
  "خانه",
  "آموزش تحلیل تکنیکال",
  "آموزش ارز دیجیتال",
  "آموزش صرافی",
  "اخبار",
]

const ticker = [
  { sym: "ETH", price: "۲٬۸۹۲", change: "۰.۸۶", up: true },
  { sym: "BTC", price: "۶۸٬۲۶۵", change: "۰.۸۶", up: true },
  { sym: "DOGE", price: "۰.۵۵", change: "۴.۵۰", up: false },
  { sym: "AVAX", price: "۵۰.۵۵", change: "۸.۵۰", up: false },
  { sym: "ADA", price: "۱٬۲۶۵", change: "۰.۸۶", up: true },
  { sym: "SOL", price: "۱۷۲.۴", change: "۲.۱۰", up: true },
]

const courses = [
  { title: "دوره تحلیل تکنیکال مقدماتی کلینیک", rate: "۴.۸" },
  { title: "دوره حرفه‌ای کریپتو باز ارز دیجیتال", rate: "۴.۹" },
  { title: "دوره صرافی و معاملات پیشرفته", rate: "۴.۷" },
]

const news = [
  { tag: "تحلیل تکنیکال", title: "برنامه‌ی غیرمتمرکز چیست؟ هر آنچه باید بدانید" },
  { tag: "اخبار", title: "صرافی بیتفینکس معاملات جدید را راه‌اندازی کرد" },
]

export default function CryptoExample() {
  return (
    <div className="space-y-6">
      <ExampleHeader
        title="داشبورد ارز دیجیتال"
        description="نمای دسکتاپ — نرخ لحظه‌ای، دوره‌های آموزشی و اخبار، با برند خودمان."
      />

      {/* App window */}
      <Card className="gap-0 overflow-hidden p-0">
        {/* Top nav */}
        <div className="flex items-center justify-between gap-4 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <BarChart3 className="size-4" />
            </span>
            <span className="font-extrabold">کلینیک سرمایه</span>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
            {nav.map((n, i) => (
              <span
                key={n}
                className={
                  i === 0
                    ? "font-medium text-primary"
                    : "cursor-pointer hover:text-foreground"
                }
              >
                {n}
              </span>
            ))}
          </nav>
          <Button variant="secondary" size="icon-sm" aria-label="جستجو">
            <Search />
          </Button>
        </div>

        {/* Ticker strip */}
        <div className="flex items-stretch overflow-x-auto border-y bg-muted/30">
          {ticker.map((t) => (
            <div
              key={t.sym}
              className="flex shrink-0 items-center gap-2 border-l px-4 py-2.5 last:border-l-0"
            >
              <span className="grid size-6 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                {t.sym.slice(0, 1)}
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold">{t.sym}</p>
                <p className="text-[11px] tabular-nums text-muted-foreground">
                  ${t.price}
                </p>
              </div>
              <span
                className={
                  "flex items-center gap-0.5 text-[11px] font-medium " +
                  (t.up ? "text-success" : "text-destructive")
                }
              >
                {t.up ? (
                  <TrendingUp className="size-3" />
                ) : (
                  <TrendingDown className="size-3" />
                )}
                {t.change}٪
              </span>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="space-y-6 p-5">
          {/* Hero + courses */}
          <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-foreground p-5 text-background">
              <div className="space-y-1">
                <BarChart3 className="size-6" />
                <h3 className="text-2xl font-black leading-tight">
                  دوره‌های آموزشی
                </h3>
                <p className="text-sm text-background/60">+ ۸٬۷۴۶ دقیقه آموزش</p>
              </div>
              <Button variant="accent" className="w-fit">
                تمام دوره‌ها
                <ChevronLeft />
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {courses.map((c) => (
                <div key={c.title} className="flex flex-col gap-3 rounded-2xl border p-3">
                  <div className="relative grid h-28 place-items-center rounded-xl bg-muted">
                    <GraduationCap className="size-8 text-muted-foreground/50" />
                    <Badge variant="accent" className="absolute right-2 top-2 gap-1">
                      <Star className="size-3 fill-current" />
                      {c.rate}
                    </Badge>
                  </div>
                  <p className="line-clamp-2 flex-1 text-sm font-medium">{c.title}</p>
                  <div className="flex items-center gap-2">
                    <Avatar className="size-6">
                      <AvatarFallback className="text-[10px]">م‌پ</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      میلاد پهلوانیان
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News */}
          <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
            <div className="space-y-4 rounded-2xl border p-4">
              <h3 className="font-bold">اخبار ارز‌های دیجیتال</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {news.map((n) => (
                  <div key={n.title} className="flex gap-3">
                    <div className="size-16 shrink-0 rounded-xl bg-muted" />
                    <div className="space-y-1">
                      <Badge variant="secondary">{n.tag}</Badge>
                      <p className="line-clamp-2 text-sm font-medium">{n.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 rounded-2xl bg-foreground p-4 text-background">
              <div className="flex items-center justify-between">
                <span className="font-bold">سرمایه TV</span>
                <Badge variant="accent">جدید</Badge>
              </div>
              <div className="relative grid h-24 place-items-center rounded-xl bg-background/10">
                <span className="grid size-11 place-items-center rounded-full bg-background text-foreground">
                  <Play className="size-5 fill-current" />
                </span>
              </div>
              <p className="text-sm text-background/70">تحلیل تکنیکال — ویدیوهای گذشته</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
