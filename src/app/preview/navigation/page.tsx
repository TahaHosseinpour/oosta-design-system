import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Section, Stage } from "@/components/preview/showcase"

export default function NavigationPreview() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">ناوبری</h1>
        <p className="text-muted-foreground">
          تب‌ها، مسیر راهنما و جداکننده. در RTL، جداکننده‌ی مسیر به سمت چپ (←) اشاره می‌کند.
        </p>
      </header>

      <Section title="مسیر راهنما (Breadcrumb)">
        <Stage>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">صفحه اصلی</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">معادن</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>جدول تجمیعی</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Stage>
      </Section>

      <Section title="تب‌ها">
        <Stage className="block">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">نگاه کلی</TabsTrigger>
              <TabsTrigger value="views">بازدید آگهی‌ها</TabsTrigger>
              <TabsTrigger value="resume">رزومه دریافتی</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="pt-4 text-sm text-muted-foreground">
              نمای کلی وضعیت مشاغل در بازه‌ی انتخاب‌شده.
            </TabsContent>
            <TabsContent value="views" className="pt-4 text-sm text-muted-foreground">
              آمار بازدید آگهی‌ها به تفکیک روز.
            </TabsContent>
            <TabsContent value="resume" className="pt-4 text-sm text-muted-foreground">
              فهرست رزومه‌های دریافتی.
            </TabsContent>
          </Tabs>
        </Stage>
      </Section>

      <Section title="جداکننده">
        <Stage className="block">
          <div className="flex items-center gap-4 text-sm">
            <span>پروفایل</span>
            <Separator orientation="vertical" className="h-5" />
            <span>پیام‌ها</span>
            <Separator orientation="vertical" className="h-5" />
            <span>تنظیمات</span>
          </div>
          <Separator className="my-4" />
          <p className="text-sm text-muted-foreground">
            محتوای زیر جداکننده‌ی افقی.
          </p>
        </Stage>
      </Section>
    </div>
  )
}
