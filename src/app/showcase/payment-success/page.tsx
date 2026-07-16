import {
  Check,
  Copy,
  ShoppingBag,
  Home,
  LayoutGrid,
  ShoppingCart,
  User,
  ChevronLeft,
} from "lucide-react"

import { ExampleHeader, PhoneFrame } from "@/components/showcase/kit"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const bottomNav = [
  { icon: User, label: "حساب کاربری" },
  { icon: ShoppingCart, label: "سبد خرید" },
  { icon: LayoutGrid, label: "دسته‌بندی" },
  { icon: Home, label: "خانه", active: true },
]

export default function PaymentSuccessExample() {
  return (
    <div className="space-y-6">
      <ExampleHeader
        title="پرداخت موفق"
        description="نمای موبایل — رسید پرداخت، کد رهگیری و خریدهای من."
      />

      <PhoneFrame>
        <div className="flex flex-1 flex-col items-center px-6 pt-14 text-center">
          {/* Success mark */}
          <div className="relative">
            <span className="grid size-24 place-items-center rounded-full bg-success/12">
              <ShoppingBag className="size-11 text-success" />
            </span>
            <span className="absolute -bottom-1 -left-1 grid size-8 place-items-center rounded-full border-4 border-background bg-success text-success-foreground">
              <Check className="size-4" />
            </span>
          </div>

          <h2 className="pt-6 text-xl font-black">
            پرداخت شما <span className="text-success">موفق</span> بود
          </h2>

          {/* Tracking code */}
          <div className="mt-6 flex w-full items-center justify-between rounded-2xl border p-3">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">کد رهگیری</p>
              <p className="font-bold tabular-nums">۹۸۷۸۲۶۴۸۹۶</p>
            </div>
            <Button variant="secondary" size="icon-sm" aria-label="کپی">
              <Copy />
            </Button>
          </div>

          {/* Order summary */}
          <div className="mt-4 w-full space-y-3 rounded-2xl border p-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">مبلغ کل</span>
              <span className="font-medium tabular-nums">۶٬۵۹۰٬۰۰۰ ریال</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">روش پرداخت</span>
              <span className="font-medium">کیف پول</span>
            </div>
            <div className="flex items-center justify-between border-t pt-3">
              <span className="text-muted-foreground">وضعیت</span>
              <span className="font-medium text-success">پرداخت‌شده</span>
            </div>
          </div>

          {/* My purchases */}
          <div className="mt-4 w-full space-y-2 text-right">
            <label className="text-sm font-medium">خریدهای من</label>
            <Input placeholder="جستجو در سفارش‌ها ..." />
          </div>

          <Button className="mt-4 w-full">
            بازگشت به فروشگاه
            <ChevronLeft />
          </Button>
        </div>

        {/* Bottom nav */}
        <div className="mt-6 grid grid-cols-4 border-t bg-background px-2 py-2">
          {bottomNav.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={
                "flex flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-medium transition-colors " +
                (active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              <span
                className={
                  "grid size-9 place-items-center rounded-xl " +
                  (active ? "bg-primary text-primary-foreground" : "")
                }
              >
                <Icon className="size-4" />
              </span>
              {label}
            </button>
          ))}
        </div>
      </PhoneFrame>
    </div>
  )
}
