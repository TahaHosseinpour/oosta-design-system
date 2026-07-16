"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  ArrowLeft,
  Lightbulb,
  Droplets,
  Zap,
  Network,
  Rocket,
  Coins,
  Users,
  Megaphone,
  FileText,
  ClipboardCheck,
  Boxes,
  CalendarPlus,
  MapPin,
} from "lucide-react"

import { ExampleHeader } from "@/components/showcase/kit"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const services = [
  { icon: Network, label: "نقشه خدمات" },
  { icon: Network, label: "شبکه تبادل فناوری" },
  { icon: Rocket, label: "چالش‌های فناوری" },
  { icon: Rocket, label: "شتاب‌دهنده‌ها" },
  { icon: Coins, label: "سرمایه‌گذاری" },
  { icon: Coins, label: "تجاری‌سازی" },
  { icon: Users, label: "کارگزاران" },
  { icon: Boxes, label: "توسعه درون‌زا" },
]

const features = [
  { icon: Lightbulb, title: "تعریف مسئله" },
  { icon: Droplets, title: "آب و پسماند" },
  { icon: Zap, title: "انرژی و برق" },
]

const steps = [
  { icon: Lightbulb, title: "تعریف مسئله", desc: "معرفی مسئله چالش بر مبنای تقاضای صنعتی موجود" },
  { icon: Megaphone, title: "اطلاع‌رسانی", desc: "از طریق سایت، شبکه‌های اجتماعی و خبرنامه" },
  { icon: FileText, title: "دریافت طرح", desc: "ثبت‌نام از طریق سامانه به‌صورت آنلاین" },
  { icon: ClipboardCheck, title: "ارزیابی طرح‌ها", desc: "ارزیابی اولیه و داوری حضوری" },
  { icon: Boxes, title: "تولید نمونه", desc: "رسیدن به نمونه‌ی اولیه و تأمین مواد" },
]

const events = [
  {
    title: "نمایشگاه بین‌المللی تهران",
    place: "ایران - تهران",
    from: "۱۱ خرداد",
    to: "۱۶ خرداد",
    accent: false,
  },
  {
    title: "نمایشگاه امارات عربی EXPO",
    place: "امارات - دبی",
    from: "۲۷ اردیبهشت",
    to: "۰۲ خرداد",
    accent: true,
  },
]

const salesData = [
  { year: "۱۳۹۴", dakheli: 620, khareji: 480 },
  { year: "۱۳۹۵", dakheli: 900, khareji: 560 },
  { year: "۱۳۹۶", dakheli: 1142, khareji: 700 },
  { year: "۱۳۹۷", dakheli: 980, khareji: 860 },
  { year: "۱۳۹۸", dakheli: 1240, khareji: 990 },
  { year: "۱۳۹۹", dakheli: 1420, khareji: 1180 },
]
const salesConfig = {
  dakheli: { label: "فروش داخلی", color: "var(--chart-1)" },
  khareji: { label: "فروش خارجی", color: "var(--chart-2)" },
} satisfies ChartConfig

export default function LandingExample() {
  return (
    <div className="space-y-5">
      <ExampleHeader
        title="صفحه فرود فناوری"
        description="نمای دسکتاپ — هیرو، روند اجرایی، همکاران و نمودار حجم فروش."
      />

      {/* Hero */}
      <Card className="relative overflow-hidden bg-primary p-0 text-primary-foreground">
        <div className="grid items-center gap-6 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              عضویت رایگان در صنعت و بازار
            </h2>
            <p className="max-w-lg text-primary-foreground/80">
              همکاری بین شرکت‌های فعال در زمینه‌ی نانو و شرکت‌های بزرگ، کلید تقویت
              و ارتقاء نوآوری محسوب می‌شود و به نفع هر دو طرف است.
            </p>
            <Button variant="accent" size="lg">
              عضویت رایگان
              <ArrowLeft />
            </Button>
          </div>
          <div className="relative hidden h-full min-h-40 lg:block">
            <span className="absolute right-6 top-2 size-40 rounded-full bg-white/10" />
            <span className="absolute right-24 top-16 size-24 rounded-full bg-white/10" />
            <ArrowLeft className="absolute bottom-6 left-8 size-16 -rotate-12 text-white/40" />
          </div>
        </div>
      </Card>

      {/* Services */}
      <Card>
        <h3 className="text-lg font-bold">نقشه خدمات</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-xl bg-input-background px-3 py-2.5 text-sm"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="size-4" />
              </span>
              {s.label}
            </div>
          ))}
        </div>
      </Card>

      {/* Dark features */}
      <div className="grid gap-4 rounded-2xl bg-foreground p-8 text-background sm:grid-cols-3">
        {features.map(({ icon: Icon, title }) => (
          <div key={title} className="space-y-2">
            <span className="grid size-11 place-items-center rounded-xl bg-background/10">
              <Icon className="size-5" />
            </span>
            <p className="font-bold">{title}</p>
            <p className="text-sm leading-relaxed text-background/60">
              فناوری نانو می‌تواند در ارتقای محصولات و افزایش بهره‌وری خط تولید
              صنایع مؤثر باشد.
            </p>
          </div>
        ))}
      </div>

      {/* Process (timeline) + events — two columns fill the width */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Events (left column) */}
        <div className="space-y-4">
          {events.map((ev) => (
            <Card key={ev.title} className="gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={
                    "grid place-items-center rounded-xl px-4 py-2 text-center " +
                    (ev.accent
                      ? "bg-primary text-primary-foreground"
                      : "bg-input-background")
                  }
                >
                  <span className="text-lg font-black leading-none">
                    {ev.to.split(" ")[0]}
                  </span>
                  <span className="text-[11px] opacity-70">{ev.to.split(" ")[1]}</span>
                </div>
                <div className="h-px flex-1 border-t border-dashed" />
                <div className="grid place-items-center rounded-xl bg-input-background px-4 py-2 text-center">
                  <span className="text-lg font-black leading-none">
                    {ev.from.split(" ")[0]}
                  </span>
                  <span className="text-[11px] opacity-70">{ev.from.split(" ")[1]}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-bold">{ev.title}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" />
                  {ev.place}
                </p>
              </div>
              <Button variant="link" size="sm" className="w-fit px-0">
                <CalendarPlus />
                افزودن به تقویم
              </Button>
            </Card>
          ))}
        </div>

        {/* Timeline (right column) */}
        <Card>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">روند اجرایی برنامه چالش‌های فناوری</h3>
            <p className="text-sm text-muted-foreground">
              چالش‌ها در ۶ مرحله اجرا و برگزار می‌شوند.
            </p>
          </div>
          <ol className="relative space-y-5 pr-6">
            <span className="absolute right-[7px] top-2 bottom-2 w-px bg-border" />
            {steps.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="relative">
                <span className="absolute -right-6 top-1 size-3.5 rounded-full border-2 border-background bg-primary ring-2 ring-primary/20" />
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <p className="font-bold">{title}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      {/* Partners */}
      <Card className="items-center gap-5 py-10 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {[Rocket, Coins, Users, Network, Boxes, Zap, Lightbulb, Droplets].map(
            (Icon, i) => (
              <span
                key={i}
                className="grid size-12 place-items-center rounded-full border bg-card shadow-[var(--shadow-soft)]"
              >
                <Icon className="size-5 text-muted-foreground" />
              </span>
            )
          )}
        </div>
        <div className="max-w-xl space-y-2">
          <h3 className="text-lg font-bold">همکاران و شرکت‌های فعال</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            همکاری بین شرکت‌های فعال در زمینه‌ی نانو و شرکت‌های بزرگ، کلید تقویت و
            ارتقاء نوآوری محسوب می‌شود؛ از یک‌سو به شرکت‌های بزرگ و از سوی دیگر به
            شرکت‌های فناور کمک می‌کند.
          </p>
        </div>
        <Button size="lg">
          ثبت‌نام و عضویت
          <ArrowLeft />
        </Button>
      </Card>

      {/* Sales chart — text beside chart, constrained height */}
      <Card>
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">حجم فروش</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              توسعه‌ی بازار یکی از عوامل کلیدی و تأثیرگذار در توسعه‌ی فناوری‌های
              پیشرفته است.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="size-3 rounded-full bg-chart-1" />
                فروش داخلی (میلیارد تومان)
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="size-3 rounded-full bg-chart-2" />
                فروش خارجی (میلیارد تومان)
              </div>
            </div>
            <Button variant="link" className="px-0">
              اطلاعات بیشتر
              <ArrowLeft />
            </Button>
          </div>

          <ChartContainer config={salesConfig} className="h-[240px] w-full">
            <AreaChart data={salesData} margin={{ left: 4, right: 4, top: 8 }}>
              <defs>
                <linearGradient id="landDakheli" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-dakheli)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-dakheli)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="landKhareji" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-khareji)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-khareji)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                dataKey="khareji"
                type="monotone"
                stroke="var(--color-khareji)"
                strokeWidth={2.5}
                fill="url(#landKhareji)"
              />
              <Area
                dataKey="dakheli"
                type="monotone"
                stroke="var(--color-dakheli)"
                strokeWidth={2.5}
                fill="url(#landDakheli)"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </Card>
    </div>
  )
}
