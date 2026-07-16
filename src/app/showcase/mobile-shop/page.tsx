import {
  Search,
  ShoppingCart,
  Menu,
  Home,
  LayoutGrid,
  User,
  Wallet,
  Headphones,
  BarChart3,
  Package,
  Plus,
  Minus,
  Trash2,
  ImageIcon,
  ChevronLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Logo } from "@/components/brand/logo"

const quickActions = [
  { icon: LayoutGrid, label: "داشبورد", active: true },
  { icon: Package, label: "محصولات", dot: true },
  { icon: ShoppingCart, label: "خرید من" },
  { icon: Wallet, label: "کیف پول", accent: true },
  { icon: Headphones, label: "پشتیبانی" },
  { icon: BarChart3, label: "گزارش فروش" },
]

const bottomNav = [
  { icon: Home, label: "خانه", active: true },
  { icon: LayoutGrid, label: "دسته‌بندی" },
  { icon: ShoppingCart, label: "سبد خرید" },
  { icon: User, label: "حساب کاربری" },
]

export default function MobileShopExample() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-extrabold">فروشگاه موبایل</h1>
        <p className="text-muted-foreground">
          نمای موبایل‌محور — روی دسکتاپ داخل قاب گوشی نشان داده می‌شود.
        </p>
      </header>

      {/* Phone frame */}
      <div className="mx-auto w-full max-w-[430px]">
        <div className="overflow-hidden rounded-[2rem] border bg-muted/40 shadow-[var(--shadow-card)] sm:p-2">
          <div className="flex min-h-[720px] flex-col rounded-[1.6rem] bg-background">
            {/* App header */}
            <div className="flex items-center justify-between px-4 pt-4">
              <Button variant="ghost" size="icon-sm" aria-label="منو">
                <Menu />
              </Button>
              <Logo />
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="سبد خرید"
                className="relative"
              >
                <ShoppingCart />
                <span className="absolute -top-0.5 -left-0.5 grid size-4 place-items-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                  ۲
                </span>
              </Button>
            </div>

            {/* Search */}
            <div className="px-4 pt-4">
              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="pr-10"
                  placeholder="نام محصول خود را جستجو کنید"
                />
              </div>
            </div>

            {/* User + wallet */}
            <div className="px-4 pt-4">
              <div className="flex items-center justify-between rounded-2xl bg-secondary/60 p-3">
                <div className="flex items-center gap-2.5">
                  <Avatar className="size-10 ring-2 ring-background">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      م‌پ
                    </AvatarFallback>
                  </Avatar>
                  <div className="leading-tight">
                    <p className="text-sm font-bold">میلاد پهلوانیان</p>
                    <p className="text-xs text-muted-foreground">دیجی‌کالا</p>
                  </div>
                </div>
                <div className="text-left leading-tight">
                  <p className="text-xs text-muted-foreground">موجودی کیف پول</p>
                  <p className="text-sm font-bold text-brand-accent">
                    ۳٬۵۳۷٬۰۰۰ تومان
                  </p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-3 gap-2.5 px-4 pt-4">
              {quickActions.map(({ icon: Icon, label, active, accent, dot }) => (
                <button
                  key={label}
                  className={
                    "relative flex flex-col items-center gap-2 rounded-2xl border p-3 text-xs font-medium transition-colors " +
                    (active
                      ? "border-primary/20 bg-primary/5 text-primary"
                      : "hover:bg-accent")
                  }
                >
                  <span
                    className={
                      "grid size-9 place-items-center rounded-xl " +
                      (accent
                        ? "bg-brand-accent/15 text-brand-accent"
                        : active
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground")
                    }
                  >
                    <Icon className="size-4" />
                  </span>
                  {label}
                  {dot ? (
                    <span className="absolute right-3 top-3 size-2 rounded-full bg-brand-accent" />
                  ) : null}
                </button>
              ))}
            </div>

            {/* Product card */}
            <div className="px-4 pt-5">
              <p className="pb-2 text-sm font-bold">پیشنهاد ویژه</p>
              <div className="flex flex-col gap-3 rounded-2xl border p-3">
                <div className="flex gap-3">
                  <div className="relative grid size-24 shrink-0 place-items-center rounded-xl bg-muted">
                    <ImageIcon className="size-7 text-muted-foreground/50" />
                    <Badge
                      variant="destructive"
                      className="absolute right-1.5 top-1.5"
                    >
                      ۲۰٪
                    </Badge>
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Package className="size-3" />
                      دیجی‌کالا
                    </div>
                    <p className="line-clamp-2 text-sm font-medium">
                      دستگاه بخور سرد و رطوبت‌ساز الکترونیک ۱۸ لیتری مدل 44LB
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-xs text-muted-foreground line-through">
                        ۷٬۲۵۰٬۰۰۰
                      </span>
                      <span className="text-sm font-bold text-success">
                        ۶٬۵۹۰٬۰۰۰ ریال
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 rounded-xl border p-1">
                    <Button size="icon-sm" variant="ghost" aria-label="افزودن">
                      <Plus />
                    </Button>
                    <span className="min-w-8 text-center text-sm font-bold">
                      ۱
                    </span>
                    <Button size="icon-sm" variant="ghost" aria-label="کاستن">
                      <Minus />
                    </Button>
                  </div>
                  <Button variant="secondary" size="sm">
                    <Trash2 />
                    حذف
                  </Button>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="px-4 pt-4">
              <Button className="w-full">
                ادامه‌ی خرید
                <ChevronLeft />
              </Button>
            </div>

            <div className="flex-1" />

            {/* Bottom tab nav */}
            <div className="sticky bottom-0 mt-4 grid grid-cols-4 border-t bg-background/95 px-2 py-2 backdrop-blur">
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
          </div>
        </div>
      </div>
    </div>
  )
}
