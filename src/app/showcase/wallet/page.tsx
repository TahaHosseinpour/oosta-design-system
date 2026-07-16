"use client"

import { Area, AreaChart } from "recharts"
import { Activity, Trash2, UserPlus, Pencil, ChevronLeft } from "lucide-react"

import { ExampleHeader, PhoneFrame } from "@/components/showcase/kit"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const trend = [
  { d: 1, v: 12 },
  { d: 2, v: 20 },
  { d: 3, v: 16 },
  { d: 4, v: 28 },
  { d: 5, v: 24 },
  { d: 6, v: 38 },
  { d: 7, v: 46 },
]
const trendConfig = {
  v: { label: "بازدید", color: "var(--chart-1)" },
} satisfies ChartConfig

export default function WalletExample() {
  return (
    <div className="space-y-6">
      <ExampleHeader
        title="کیف پول موبایل"
        description="نمای موبایل — نمودار خلاصه، دیالوگ تأیید و کارت بانکی."
      />

      <PhoneFrame className="gap-4 p-4">
        {/* Chart summary card */}
        <div className="rounded-2xl border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold">نمایش نموداری</p>
              <p className="text-xs text-muted-foreground">بازدید از آگهی‌ها</p>
            </div>
            <span className="grid size-9 place-items-center rounded-xl bg-secondary text-primary">
              <Activity className="size-4" />
            </span>
          </div>
          <div className="flex items-baseline gap-2 pt-2">
            <span className="text-2xl font-black">۲٬۳۴۲</span>
            <Badge variant="soft-success">۶.۴٪</Badge>
          </div>
          <Tabs defaultValue="all" className="pt-3">
            <TabsList className="w-full">
              <TabsTrigger value="all">نگاه کلی</TabsTrigger>
              <TabsTrigger value="views">بازدید</TabsTrigger>
              <TabsTrigger value="resume">رزومه</TabsTrigger>
            </TabsList>
          </Tabs>
          <ChartContainer config={trendConfig} className="h-[120px] w-full pt-2">
            <AreaChart data={trend} margin={{ left: 0, right: 0, top: 4 }}>
              <defs>
                <linearGradient id="walletTrend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-v)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-v)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                dataKey="v"
                type="monotone"
                stroke="var(--color-v)"
                strokeWidth={2.5}
                fill="url(#walletTrend)"
              />
            </AreaChart>
          </ChartContainer>
        </div>

        {/* Followers confirm card (glass) */}
        <div className="space-y-4 rounded-2xl border bg-secondary/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">۴ مورد انتخاب‌شده</span>
            <div className="flex -space-x-2 -space-x-reverse">
              {["ع‌ا", "م‌ر", "ک‌م"].map((n) => (
                <Avatar key={n} className="size-7 ring-2 ring-background">
                  <AvatarFallback className="text-[10px]">{n}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <Button size="icon" variant="destructive" aria-label="حذف">
              <Trash2 />
            </Button>
            <Button size="icon" variant="secondary" aria-label="افزودن">
              <UserPlus />
            </Button>
          </div>
          <div>
            <p className="text-center text-sm font-bold">حذف از دنبال‌کننده‌ها</p>
            <p className="pt-1 text-center text-xs text-muted-foreground">
              آیا نسبت به حذف منتخبین از علاقه‌مندی‌های خود مطمئن هستید؟
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="secondary">بله، حذف شو</Button>
            <Button>منصرف شدم</Button>
          </div>
        </div>

        {/* Bank card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#16234f] p-5 text-primary-foreground">
          <div className="flex items-center justify-between">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white/15 text-white hover:bg-white/25"
            >
              <Pencil />
              ویرایش
            </Button>
            <span className="text-sm font-medium">کارت بانکی پیش‌فرض</span>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-8">
            <div>
              <p className="text-xs text-white/60">تاریخ انقضا</p>
              <p className="font-bold tabular-nums">۰۲/۰۳</p>
            </div>
            <div className="text-left">
              <p className="text-xs text-white/60">دارنده حساب</p>
              <p className="font-bold">میلاد پهلوانیان</p>
            </div>
          </div>
          <p dir="ltr" className="pt-4 text-lg font-bold tracking-widest tabular-nums">
            ۶۱۰۴ **** **** ۵۶
          </p>
        </div>

        <Button className="mt-auto w-full">
          مشاهده تراکنش‌ها
          <ChevronLeft />
        </Button>
      </PhoneFrame>
    </div>
  )
}
