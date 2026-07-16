import { ChevronRight, MapPin, Info, ChevronLeft } from "lucide-react"

import { ExampleHeader, PhoneFrame } from "@/components/showcase/kit"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SettlementExample() {
  return (
    <div className="space-y-6">
      <ExampleHeader
        title="تسویه حساب مالی"
        description="نمای موبایل — موجودی، نقشه و ثبت درخواست تسویه."
      />

      <PhoneFrame className="gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">تسویه حساب مالی</h2>
          <Button variant="secondary" size="icon-sm" aria-label="بازگشت">
            <ChevronRight />
          </Button>
        </div>

        {/* Balance */}
        <div className="rounded-2xl bg-secondary/50 p-4">
          <p className="text-xs text-muted-foreground">موجودی قابل برداشت</p>
          <p className="pt-1 text-2xl font-black text-success tabular-nums">
            ۳٬۵۳۷٬۰۰۰ تومان
          </p>
        </div>

        {/* Amount */}
        <div className="space-y-2">
          <Label htmlFor="amount">مبلغ تسویه</Label>
          <Input id="amount" placeholder="مبلغ مورد نظر را وارد نمایید" />
        </div>

        {/* Map placeholder */}
        <div className="relative h-40 overflow-hidden rounded-2xl border bg-muted">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-card)]">
              <MapPin className="size-5" />
            </span>
          </span>
          <Button
            variant="secondary"
            size="sm"
            className="absolute right-3 top-3"
          >
            انتخاب روی نقشه
          </Button>
        </div>

        {/* Warning */}
        <Alert variant="warning">
          <Info />
          <AlertTitle>نکات قابل توجه در تسویه مالی</AlertTitle>
          <AlertDescription>
            تسویه حساب تا ۷۲ ساعت کاری پس از ثبت درخواست انجام می‌شود.
          </AlertDescription>
        </Alert>

        {/* Actions */}
        <div className="mt-auto space-y-2">
          <Button className="w-full">
            ایجاد درخواست تسویه مالی
            <ChevronLeft />
          </Button>
          <Button variant="secondary" className="w-full">
            مشاهده کامل لیست تسویه
          </Button>
        </div>
      </PhoneFrame>
    </div>
  )
}
