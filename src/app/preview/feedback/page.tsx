import { Info, CircleAlert } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Section, Stage } from "@/components/preview/showcase"

export default function FeedbackPreview() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">بازخورد</h1>
        <p className="text-muted-foreground">
          آکاردیون، هشدارها و دیالوگ تأیید عملیات.
        </p>
      </header>

      <Section title="آکاردیون" description="مثل سوالات متداول">
        <Stage className="block">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="1">
              <AccordionTrigger>چطور درخواست ثبت کنم؟</AccordionTrigger>
              <AccordionContent>
                از طریق داشبورد، بخش «ثبت درخواست جدید» را باز کنید و فرم را تکمیل
                کنید.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>هزینه‌ی عضویت چقدر است؟</AccordionTrigger>
              <AccordionContent>
                عضویت برای شرکت‌های فعال در این حوزه رایگان است.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>پشتیبانی چگونه است؟</AccordionTrigger>
              <AccordionContent>
                پشتیبانی ۲۴×۷ از طریق مرکز آموزش و راهنما در دسترس است.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Stage>
      </Section>

      <Section title="هشدار">
        <Stage className="flex-col items-stretch">
          <Alert>
            <Info />
            <AlertTitle>اطلاعیه</AlertTitle>
            <AlertDescription>
              پروفایل شما ۶۰٪ تکمیل شده است. برای دیده‌شدن بیشتر آن را کامل کنید.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <CircleAlert />
            <AlertTitle>خطا در ثبت اطلاعات</AlertTitle>
            <AlertDescription>
              کد ملی واردشده معتبر نیست. لطفاً دوباره بررسی کنید.
            </AlertDescription>
          </Alert>
        </Stage>
      </Section>

      <Section title="دیالوگ تأیید">
        <Stage>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">حذف دنبال‌کننده‌ها</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>حذف از دنبال‌کننده‌ها</AlertDialogTitle>
                <AlertDialogDescription>
                  آیا نسبت به حذف منتخبین از علاقه‌مندی‌های خود مطمئن هستید؟ این
                  عمل قابل بازگشت نیست.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>منصرف شدم</AlertDialogCancel>
                <AlertDialogAction>بله، حذف شو</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Stage>
      </Section>
    </div>
  )
}
