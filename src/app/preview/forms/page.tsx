import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Section, Stage } from "@/components/preview/showcase"

export default function FormsPreview() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">فرم‌ها</h1>
        <p className="text-muted-foreground">
          ورودی‌ها با پس‌زمینه‌ی خاکستریِ روشن و گوشه‌های نرم — الهام‌گرفته از طرح‌ها.
        </p>
      </header>

      <Section title="ورودی متن">
        <Stage className="flex-col items-stretch gap-5 sm:max-w-md">
          <div className="space-y-2">
            <Label htmlFor="name">نام و نام خانوادگی</Label>
            <Input id="name" placeholder="مثلاً: میلاد پهلوانیان" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="search">جستجو</Label>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="search" className="pr-10" placeholder="جستجو کنید ..." />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="err">کد ملی</Label>
            <Input id="err" aria-invalid defaultValue="۱۲۳" />
            <p className="text-xs text-destructive">کد ملی باید ۱۰ رقم باشد.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="disabled">حساب کاربری</Label>
            <Input id="disabled" disabled placeholder="غیرفعال" />
          </div>
        </Stage>
      </Section>

      <Section title="متن چندخطی">
        <Stage className="sm:max-w-md">
          <div className="w-full space-y-2">
            <Label htmlFor="bio">درباره‌ی شما</Label>
            <Textarea id="bio" placeholder="چند خطی درباره‌ی خودتان بنویسید ..." />
          </div>
        </Stage>
      </Section>

      <Section title="رادیو" description="مثلاً نوع بهره‌بردار">
        <Stage>
          <RadioGroup defaultValue="haghighi" className="gap-3">
            <div className="flex items-center gap-2.5">
              <RadioGroupItem value="haghighi" id="haghighi" />
              <Label htmlFor="haghighi">بهره‌بردار حقیقی</Label>
            </div>
            <div className="flex items-center gap-2.5">
              <RadioGroupItem value="hoghoughi" id="hoghoughi" />
              <Label htmlFor="hoghoughi">بهره‌بردار حقوقی</Label>
            </div>
          </RadioGroup>
        </Stage>
      </Section>

      <Section title="انتخاب">
        <Stage className="sm:max-w-md">
          <div className="w-full space-y-2">
            <Label>استان</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="یک استان انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tehran">تهران</SelectItem>
                <SelectItem value="isfahan">اصفهان</SelectItem>
                <SelectItem value="fars">فارس</SelectItem>
                <SelectItem value="khorasan">خراسان رضوی</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Stage>
      </Section>

      <Section title="چک‌باکس و سوییچ">
        <Stage className="flex-col items-start gap-4">
          <div className="flex items-center gap-2.5">
            <Checkbox id="terms" defaultChecked />
            <Label htmlFor="terms">قوانین و مقررات را می‌پذیرم</Label>
          </div>
          <div className="flex items-center gap-2.5">
            <Checkbox id="news" />
            <Label htmlFor="news">دریافت خبرنامه</Label>
          </div>
          <div className="flex items-center gap-2.5">
            <Switch id="notif" defaultChecked />
            <Label htmlFor="notif">اعلان‌ها فعال باشد</Label>
          </div>
        </Stage>
      </Section>
    </div>
  )
}
