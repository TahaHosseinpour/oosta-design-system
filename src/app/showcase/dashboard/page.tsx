"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts"
import {
  Bell,
  Activity,
  Eye,
  FileText,
  Inbox,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Calendar,
  ChevronLeft,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const stats = [
  { label: "بازدید از آگهی‌ها", value: "۲٬۳۴۲", delta: "۶.۴٪", up: true, icon: Eye },
  { label: "رزومه دریافتی", value: "۴۸۶", delta: "۳.۱٪", up: true, icon: FileText },
  { label: "درخواست‌ها", value: "۱۲۷", delta: "۲.۰٪", up: false, icon: Inbox },
  { label: "پیام‌ها", value: "۳۹", delta: "۱۱٪", up: true, icon: MessageSquare },
]

const chartData = [
  { m: "۱", overall: 12, resume: 8 },
  { m: "۲", overall: 19, resume: 11 },
  { m: "۳", overall: 15, resume: 13 },
  { m: "۴", overall: 25, resume: 15 },
  { m: "۵", overall: 22, resume: 18 },
  { m: "۶", overall: 30, resume: 20 },
  { m: "۷", overall: 28, resume: 24 },
  { m: "۸", overall: 38, resume: 27 },
  { m: "۹", overall: 35, resume: 30 },
  { m: "۱۰", overall: 48, resume: 33 },
  { m: "۱۱", overall: 44, resume: 36 },
  { m: "۱۲", overall: 52, resume: 40 },
]

const chartConfig = {
  overall: { label: "نگاه کلی", color: "var(--chart-1)" },
  resume: { label: "رزومه دریافتی", color: "var(--chart-3)" },
} satisfies ChartConfig

const requests = [
  { name: "عرشیا احمدی", role: "طراح محصول", status: "فعال", date: "۱۲ خرداد" },
  { name: "مینا رضایی", role: "توسعه‌دهنده", status: "در انتظار", date: "۱۱ خرداد" },
  { name: "کاوه مرادی", role: "کارشناس فروش", status: "فعال", date: "۹ خرداد" },
  { name: "سارا کریمی", role: "مدیر پروژه", status: "بسته", date: "۸ خرداد" },
]

export default function DashboardExample() {
  return (
    <div className="space-y-6">
      {/* Top bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold">خلاصه وضعیت مشاغل</h1>
          <p className="text-sm text-muted-foreground">
            نمایش از ۱۲ خرداد تا امروز (ماه جاری)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar />
            ۱۲ خرداد - ۱۲ شهریور
          </Button>
          <Button>
            برو به آمار
            <ChevronLeft />
          </Button>
          <Button variant="secondary" size="icon" aria-label="اعلان‌ها" className="relative">
            <Bell />
            <span className="absolute -top-0.5 -left-0.5 grid size-4 place-items-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
              ۴
            </span>
          </Button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, delta, up, icon: Icon }) => (
          <Card key={label} className="gap-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardDescription>{label}</CardDescription>
                <span className="grid size-9 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-4" />
                </span>
              </div>
              <CardTitle className="text-3xl">{value}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={up ? "soft-success" : "soft-destructive"}>
                {up ? (
                  <TrendingUp className="size-3" />
                ) : (
                  <TrendingDown className="size-3" />
                )}
                {delta} این هفته
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart + side */}
      <div className="grid gap-5 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CardTitle className="text-base">نمایش نموداری</CardTitle>
              <Tabs defaultValue="overall">
                <TabsList>
                  <TabsTrigger value="overall">نگاه کلی</TabsTrigger>
                  <TabsTrigger value="resume">رزومه دریافتی</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <ChartContainer config={chartConfig} className="h-[280px] w-full">
              <AreaChart data={chartData} margin={{ left: 4, right: 4, top: 8 }}>
                <defs>
                  <linearGradient id="dashOverall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-overall)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-overall)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="dashResume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-resume)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-resume)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="m" tickLine={false} axisLine={false} tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  dataKey="resume"
                  type="monotone"
                  stroke="var(--color-resume)"
                  strokeWidth={2.5}
                  fill="url(#dashResume)"
                />
                <Area
                  dataKey="overall"
                  type="monotone"
                  stroke="var(--color-overall)"
                  strokeWidth={2.5}
                  fill="url(#dashOverall)"
                />
              </AreaChart>
            </ChartContainer>
        </Card>

        {/* Activity side card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">فعالیت اخیر</CardTitle>
              <span className="grid size-9 place-items-center rounded-xl bg-brand-accent/15 text-brand-accent">
                <Activity className="size-4" />
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {requests.slice(0, 3).map((r) => (
              <div key={r.name} className="flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback>{r.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-sm font-medium">{r.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{r.role}</p>
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card className="gap-0 p-0">
        <div className="flex items-center justify-between p-6">
          <CardTitle className="text-base">آخرین درخواست‌ها</CardTitle>
          <Button variant="link" size="sm" className="px-0">
            مشاهده همه
            <ChevronLeft />
          </Button>
        </div>
        <div className="overflow-hidden border-t">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>نام</TableHead>
                <TableHead>سمت</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead className="text-start">تاریخ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((r) => (
                <TableRow key={r.name}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell className="text-muted-foreground">{r.role}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        r.status === "فعال"
                          ? "soft-success"
                          : r.status === "در انتظار"
                            ? "warning"
                            : "secondary"
                      }
                    >
                      {r.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{r.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
