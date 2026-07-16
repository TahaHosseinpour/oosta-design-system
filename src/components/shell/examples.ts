/** Full example pages ("نمونه‌کارها") built with the design system. */
export type ExampleItem = {
  slug: string
  title: string
  description: string
  device: "desktop" | "mobile"
}

export const examples: ExampleItem[] = [
  {
    slug: "dashboard",
    title: "داشبورد مشاغل",
    description: "پنل مدیریتی با کارت آمار، نمودار، تب و جدول",
    device: "desktop",
  },
  {
    slug: "mining-panel",
    title: "پنل مدیریت معادن",
    description: "فاکتور، جدول سطوح دسترسی و تنظیمات",
    device: "desktop",
  },
  {
    slug: "landing",
    title: "صفحه فرود فناوری",
    description: "هیرو، روند اجرایی، همکاران و نمودار حجم فروش",
    device: "desktop",
  },
  {
    slug: "crypto",
    title: "داشبورد ارز دیجیتال",
    description: "نرخ لحظه‌ای، دوره‌های آموزشی و اخبار",
    device: "desktop",
  },
  {
    slug: "mobile-shop",
    title: "فروشگاه موبایل",
    description: "اپلیکیشن فروشگاهی با سبد خرید و ناوبری پایین",
    device: "mobile",
  },
  {
    slug: "wallet",
    title: "کیف پول موبایل",
    description: "کارت بانکی، نمودار و دیالوگ تأیید",
    device: "mobile",
  },
  {
    slug: "payment-success",
    title: "پرداخت موفق",
    description: "رسید پرداخت، کد رهگیری و خریدهای من",
    device: "mobile",
  },
  {
    slug: "settlement",
    title: "تسویه حساب مالی",
    description: "موجودی، نقشه و ثبت درخواست تسویه",
    device: "mobile",
  },
]
