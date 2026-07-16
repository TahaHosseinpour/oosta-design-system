import { ArrowLeft, Download, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section, Stage, Item } from "@/components/preview/showcase"

export default function ButtonsPreview() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">دکمه‌ها</h1>
        <p className="text-muted-foreground">
          دو رنگ برند: آبی (اصلی) و نارنجی (accent). همه‌ی واریانت‌ها از یک بلوک
          cva در <code className="text-foreground">button.tsx</code> کنترل می‌شوند.
        </p>
      </header>

      <Section title="واریانت‌ها" description="نقش‌های مختلف دکمه در سیستم">
        <Stage>
          <Item label="default">
            <Button>ثبت‌نام</Button>
          </Item>
          <Item label="accent">
            <Button variant="accent">کیف پول</Button>
          </Item>
          <Item label="success">
            <Button variant="success">پرداخت</Button>
          </Item>
          <Item label="destructive">
            <Button variant="destructive">حذف</Button>
          </Item>
          <Item label="secondary">
            <Button variant="secondary">انصراف</Button>
          </Item>
          <Item label="outline">
            <Button variant="outline">جزئیات</Button>
          </Item>
          <Item label="ghost">
            <Button variant="ghost">بیشتر</Button>
          </Item>
          <Item label="link">
            <Button variant="link">اطلاعات بیشتر</Button>
          </Item>
        </Stage>
      </Section>

      <Section title="اندازه‌ها">
        <Stage>
          <Item label="sm">
            <Button size="sm">کوچک</Button>
          </Item>
          <Item label="default">
            <Button>معمولی</Button>
          </Item>
          <Item label="lg">
            <Button size="lg">بزرگ</Button>
          </Item>
        </Stage>
      </Section>

      <Section
        title="همراه آیکون"
        description="در RTL، فلش «ادامه/بیشتر» به سمت چپ (←) اشاره می‌کند."
      >
        <Stage>
          <Button>
            عضویت رایگان
            <ArrowLeft />
          </Button>
          <Button variant="accent">
            <Download />
            دانلود رزومه
          </Button>
          <Button variant="outline">
            <Plus />
            افزودن
          </Button>
          <Button size="icon" variant="secondary" aria-label="حذف">
            <Trash2 />
          </Button>
        </Stage>
      </Section>

      <Section title="حالت‌ها">
        <Stage>
          <Button disabled>غیرفعال</Button>
          <Button variant="accent" disabled>
            غیرفعال
          </Button>
          <Button variant="outline" disabled>
            غیرفعال
          </Button>
        </Stage>
      </Section>
    </div>
  )
}
