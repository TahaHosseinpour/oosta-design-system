"use client"

import { toast } from "sonner"
import { MoreHorizontal, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Section, Stage } from "@/components/preview/showcase"

export default function OverlaysPreview() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">لایه‌ها و منوها</h1>
        <p className="text-muted-foreground">
          دیالوگ، شیت، منوی کشویی، تولتیپ و اعلان — دکمه‌ی بستن در RTL سمت چپ است.
        </p>
      </header>

      <Section title="دیالوگ">
        <Stage>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="accent">حذف حساب کاربری</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>حذف حساب کاربری</DialogTitle>
                <DialogDescription>
                  آیا مطمئن هستید؟ این عمل قابل بازگشت نیست و همه‌ی داده‌های شما پاک
                  می‌شود.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">منصرف شدم</Button>
                </DialogClose>
                <Button variant="destructive">بله، حذف شود</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Stage>
      </Section>

      <Section title="شیت (کشوی کناری)">
        <Stage>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">باز کردن منو</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>آگام‌باشتیم</SheetTitle>
                <SheetDescription>دسترسی سریع به بخش‌ها</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {["صفحه اصلی", "وبلاگ محتوا", "داستان ما", "تماس با ما", "حساب کاربری"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="rounded-xl px-3 py-2.5 text-sm hover:bg-accent"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="secondary">بستن</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Stage>
      </Section>

      <Section title="منوی کشویی">
        <Stage>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" aria-label="گزینه‌ها">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>حساب کاربری</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>ویرایش پروفایل</DropdownMenuItem>
              <DropdownMenuItem>تنظیمات</DropdownMenuItem>
              <DropdownMenuItem>ویرایش رمز عبور</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">خروج</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Stage>
      </Section>

      <Section title="تولتیپ و اعلان">
        <Stage>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" aria-label="اعلان‌ها">
                  <Bell />
                </Button>
              </TooltipTrigger>
              <TooltipContent>۴ اعلان خوانده‌نشده</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button
            onClick={() =>
              toast.success("تغییرات با موفقیت ذخیره شد", {
                description: "پروفایل شما به‌روزرسانی شد.",
              })
            }
          >
            نمایش اعلان
          </Button>
        </Stage>
      </Section>
    </div>
  )
}
