"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
} from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Section } from "@/components/preview/showcase"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

const visitsData = [
  { month: "فروردین", visits: 18 },
  { month: "اردیبهشت", visits: 26 },
  { month: "خرداد", visits: 22 },
  { month: "تیر", visits: 34 },
  { month: "مرداد", visits: 30 },
  { month: "شهریور", visits: 45 },
]

const visitsConfig = {
  visits: { label: "بازدید", color: "var(--chart-1)" },
} satisfies ChartConfig

const shareData = [
  { name: "معادن", value: 45, fill: "var(--chart-1)" },
  { name: "انرژی", value: 25, fill: "var(--chart-2)" },
  { name: "آب", value: 18, fill: "var(--chart-5)" },
  { name: "سایر", value: 12, fill: "var(--chart-4)" },
]

const shareConfig = {
  value: { label: "سهم" },
} satisfies ChartConfig

export default function ChartsPreview() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">نمودارها</h1>
        <p className="text-muted-foreground">
          رنگ‌ها از توکن‌های <code className="text-foreground">--chart-*</code>{" "}
          می‌آیند و اعداد به‌صورت خودکار فارسی‌اند.
        </p>
      </header>

      <Section title="نمودار ناحیه‌ای" description="حجم فروش داخلی و خارجی">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">حجم فروش</CardTitle>
            <CardDescription>میلیارد تومان</CardDescription>
          </CardHeader>
          <ChartContainer config={salesConfig} className="h-[260px] w-full">
              <AreaChart data={salesData} margin={{ left: 4, right: 4, top: 8 }}>
                <defs>
                  <linearGradient id="fillDakheli" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-dakheli)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-dakheli)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient id="fillKhareji" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-khareji)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-khareji)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area
                  dataKey="khareji"
                  type="monotone"
                  stroke="var(--color-khareji)"
                  strokeWidth={2.5}
                  fill="url(#fillKhareji)"
                />
                <Area
                  dataKey="dakheli"
                  type="monotone"
                  stroke="var(--color-dakheli)"
                  strokeWidth={2.5}
                  fill="url(#fillDakheli)"
                />
              </AreaChart>
            </ChartContainer>
        </Card>
      </Section>

      <div className="grid gap-5 lg:grid-cols-2">
        <Section title="نمودار ستونی" description="بازدید ماهانه">
          <Card>
            <div className="pt-2">
              <ChartContainer config={visitsConfig} className="h-[240px] w-full">
                <BarChart data={visitsData} margin={{ left: 4, right: 4 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    tickFormatter={(v: string) => v.slice(0, 4)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="visits"
                    fill="var(--color-visits)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </Card>
        </Section>

        <Section title="نمودار دایره‌ای" description="سهم بخش‌ها">
          <Card>
            <div className="pt-2">
              <ChartContainer
                config={shareConfig}
                className="mx-auto aspect-square h-[240px]"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={shareData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    strokeWidth={4}
                  >
                    {shareData.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                </PieChart>
              </ChartContainer>
            </div>
          </Card>
        </Section>
      </div>
    </div>
  )
}
