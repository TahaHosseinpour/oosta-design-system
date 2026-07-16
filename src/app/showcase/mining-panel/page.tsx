import {
  Bell,
  Check,
  X,
  QrCode,
  ChevronLeft,
  Settings,
  Plus,
} from "lucide-react"

import { ExampleHeader } from "@/components/showcase/kit"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const settingsMenu = [
  "استان‌ها",
  "شهرستان",
  "بخش",
  "مواد معدنی",
  "نوع معادن",
  "درجه معادن",
  "بهره‌برداران",
  "بررسی اصالت و اجازه",
  "کاربران",
]

const invoiceRows = [
  ["سنگ آهن مگنتیت", "۳۰", "۳.۳", "۶", "۵۰٬۰۰۰٬۰۰۰"],
  ["سنگ آهن مگنتیت", "۴۰", "۳.۸", "۶", "۸٬۵۰۰٬۰۰۰"],
  ["سنگ آهن مگنتیت", "۵۰", "۴.۷", "۶", "۳٬۵۰۰٬۰۰۰"],
  ["سنگ آهن مگنتیت", "۵۵", "۴.۷", "۶", "۴٬۰۰۰٬۰۰۰"],
]

const permResources = [
  "عنوان دسترسی و مجوز",
  "حقوق دولتی",
  "معادن",
  "استخراج",
  "صورتحساب",
  "فایل استخراج",
]
const permActions = ["مشاهده", "افزودن", "ویرایش", "حذف"]
// truthy = allowed
const permMatrix = [
  [1, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
]

function Perm({ allowed }: { allowed: boolean }) {
  return allowed ? (
    <span className="mx-auto grid size-6 place-items-center rounded-md bg-success/12 text-success">
      <Check className="size-3.5" />
    </span>
  ) : (
    <span className="mx-auto grid size-6 place-items-center rounded-md bg-destructive/10 text-destructive">
      <X className="size-3.5" />
    </span>
  )
}

export default function MiningPanelExample() {
  return (
    <div className="space-y-6">
      <ExampleHeader
        title="پنل مدیریت معادن"
        description="نمای دسکتاپ — فاکتور، سطوح دسترسی و تنظیمات، با برند خودمان."
      />

      {/* Top bar */}
      <Card className="flex-row items-center justify-between gap-4 py-4">
        <CardTitle className="text-base">پایش معادن ایران</CardTitle>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="icon" aria-label="اعلان‌ها" className="relative">
            <Bell />
            <span className="absolute -top-0.5 -left-0.5 grid size-4 place-items-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
              ۴
            </span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar className="size-9">
              <AvatarFallback>م‌پ</AvatarFallback>
            </Avatar>
            <div className="leading-tight">
              <p className="text-sm font-bold">میلاد پهلوانیان</p>
              <p className="text-xs text-muted-foreground">کاربر وزارت کشور</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-[1fr_240px]">
        {/* Main column */}
        <div className="min-w-0 space-y-5">
          {/* Invoice */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  فاکتور حقوق دولتی معدن سنگ آهن
                </CardTitle>
                <span className="grid size-14 place-items-center rounded-xl bg-muted">
                  <QrCode className="size-8 text-foreground/70" />
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["استان", "اصفهان"],
                  ["شهرستان", "لنجان"],
                  ["نوع معدن", "روباز"],
                  ["درجه معدن", "۲"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-input-background px-3 py-2">
                    <p className="text-xs text-muted-foreground">{k}</p>
                    <p className="text-sm font-medium">{v}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-xl border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ماده معدنی</TableHead>
                      <TableHead>عیار</TableHead>
                      <TableHead>جرم حجمی</TableHead>
                      <TableHead>گروه</TableHead>
                      <TableHead className="text-start">قیمت (ریال)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoiceRows.map((r, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{r[0]}</TableCell>
                        <TableCell>{r[1]}</TableCell>
                        <TableCell>{r[2]}</TableCell>
                        <TableCell>{r[3]}</TableCell>
                        <TableCell className="text-start tabular-nums">
                          {r[4]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-primary/5 px-4 py-3">
                <span className="text-sm font-medium">جمع حقوق دولتی</span>
                <span className="text-base font-bold text-primary tabular-nums">
                  ۲۵۰٬۰۰۰٬۰۰۰ ریال
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Permissions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">بررسی اصالت و مجوزها</CardTitle>
            </CardHeader>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>عنوان</TableHead>
                    {permActions.map((a) => (
                      <TableHead key={a} className="text-center">
                        {a}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {permResources.map((res, i) => (
                    <TableRow key={res}>
                      <TableCell className="font-medium">{res}</TableCell>
                      {permMatrix[i].map((allowed, j) => (
                        <TableCell key={j}>
                          <Perm allowed={Boolean(allowed)} />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* Add operator form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">افزودن بهره‌بردار جدید</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup defaultValue="haghighi" className="flex gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="haghighi" id="m-haghighi" />
                  <Label htmlFor="m-haghighi">بهره‌بردار حقیقی</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="hoghoughi" id="m-hoghoughi" />
                  <Label htmlFor="m-hoghoughi">بهره‌بردار حقوقی</Label>
                </div>
              </RadioGroup>
              <div className="grid gap-3 sm:grid-cols-2">
                <Input placeholder="کد ملی (حقیقی) یا شناسه ملی (حقوقی)" />
                <Input placeholder="شماره شناسنامه" />
                <Input placeholder="آدرس معتبر" className="sm:col-span-2" />
              </div>
              <div className="flex gap-2">
                <Button>
                  <Plus />
                  افزودن
                </Button>
                <Button variant="secondary">انصراف</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings sidebar */}
        <Card className="h-fit gap-2 p-3 lg:sticky lg:top-8">
          <div className="mb-1 flex items-center justify-between rounded-xl bg-primary px-3 py-2.5 text-primary-foreground">
            <span className="flex items-center gap-2 text-sm font-bold">
              <Settings className="size-4" />
              تنظیمات
            </span>
          </div>
          {settingsMenu.map((item, i) => (
            <button
              key={item}
              className={
                "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors " +
                (i === 6
                  ? "bg-secondary font-medium text-primary"
                  : "hover:bg-accent")
              }
            >
              {item}
              <ChevronLeft className="size-4 opacity-50" />
            </button>
          ))}
        </Card>
      </div>
    </div>
  )
}
