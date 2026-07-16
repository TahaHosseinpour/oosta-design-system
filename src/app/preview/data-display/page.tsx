import { TrendingUp } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Section, Stage } from "@/components/preview/showcase"

export default function DataDisplayPreview() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">نمایش داده</h1>
        <p className="text-muted-foreground">
          کارت‌های شناور، بَج‌ها، جدول و نوار پیشرفت.
        </p>
      </header>

      <Section title="کارت‌ها">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Stat card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardDescription>بازدید از آگهی‌ها</CardDescription>
                <span className="grid size-9 place-items-center rounded-xl bg-secondary text-primary">
                  <TrendingUp className="size-4" />
                </span>
              </div>
              <CardTitle className="text-3xl">۲,۳۴۲</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="soft-success">
                <TrendingUp className="size-3" />
                ۶.۴٪ این هفته
              </Badge>
            </CardContent>
          </Card>

          {/* Profile completion */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar className="size-11">
                  <AvatarImage src="" alt="" />
                  <AvatarFallback>م‌پ</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <CardTitle className="text-base">میلاد پهلوانیان</CardTitle>
                  <CardDescription>کارفرما</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">تکمیل پروفایل</span>
                <span className="font-bold">۶۰٪</span>
              </div>
              <Progress value={60} />
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="بَج‌ها" description="رنگ‌های معنایی سیستم">
        <Stage>
          <Badge>پیش‌فرض</Badge>
          <Badge variant="accent">ویژه</Badge>
          <Badge variant="success">فعال</Badge>
          <Badge variant="warning">در انتظار</Badge>
          <Badge variant="destructive">۲۰٪ تخفیف</Badge>
          <Badge variant="secondary">پیش‌نویس</Badge>
          <Badge variant="soft-success">موجود</Badge>
          <Badge variant="outline">آرشیو</Badge>
        </Stage>
      </Section>

      <Section title="آواتار">
        <Stage>
          <Avatar>
            <AvatarFallback>ع‌ا</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              م‌پ
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-brand-accent text-brand-accent-foreground">
              ر‌ک
            </AvatarFallback>
          </Avatar>
        </Stage>
      </Section>

      <Section title="جدول">
        <div className="overflow-hidden rounded-2xl border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ماده معدنی</TableHead>
                <TableHead>استان</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead className="text-left">تناژ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["سنگ آهن", "اصفهان", "فعال", "۵۵٬۷۰۰"],
                ["مس", "کرمان", "در انتظار", "۱۲٬۴۰۰"],
                ["سرب و روی", "یزد", "فعال", "۸٬۹۰۰"],
              ].map(([mineral, province, status, tonnage]) => (
                <TableRow key={mineral}>
                  <TableCell className="font-medium">{mineral}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {province}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={status === "فعال" ? "soft-success" : "secondary"}
                    >
                      {status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left tabular-nums">
                    {tonnage}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>

      <Section title="اسکلتون (بارگذاری)">
        <Stage>
          <div className="flex w-full items-center gap-3">
            <Skeleton className="size-11 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3.5 w-1/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        </Stage>
      </Section>
    </div>
  )
}
