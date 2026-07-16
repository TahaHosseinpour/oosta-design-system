import { SlidersHorizontal, Bell, Bookmark, Heart } from "lucide-react"

import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Section, Stage } from "@/components/preview/showcase"

export default function ControlsPreview() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">کنترل‌ها</h1>
        <p className="text-muted-foreground">
          اسلایدر، تاگل، پاپ‌اور و صفحه‌بندی — همه راست‌به‌چپ.
        </p>
      </header>

      <Section title="اسلایدر">
        <Stage className="flex-col items-stretch gap-8 sm:max-w-md">
          <div className="space-y-3">
            <Label>میزان تولید</Label>
            <Slider defaultValue={[40]} max={100} step={1} />
          </div>
          <div className="space-y-3">
            <Label>محدوده‌ی قیمت</Label>
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </Stage>
      </Section>

      <Section title="تاگل گروهی" description="مثل فیلتر «درجه» در طرح‌ها">
        <Stage className="flex-col items-start gap-5">
          <ToggleGroup type="single" defaultValue="all" variant="outline">
            <ToggleGroupItem value="all">همه</ToggleGroupItem>
            <ToggleGroupItem value="1">۱</ToggleGroupItem>
            <ToggleGroupItem value="2">۲</ToggleGroupItem>
            <ToggleGroupItem value="3">۳</ToggleGroupItem>
            <ToggleGroupItem value="4">۴</ToggleGroupItem>
            <ToggleGroupItem value="5">۵</ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup type="multiple" defaultValue={["save"]}>
            <ToggleGroupItem value="save" aria-label="ذخیره">
              <Bookmark />
            </ToggleGroupItem>
            <ToggleGroupItem value="like" aria-label="پسندیدن">
              <Heart />
            </ToggleGroupItem>
            <ToggleGroupItem value="notify" aria-label="اعلان">
              <Bell />
            </ToggleGroupItem>
          </ToggleGroup>
        </Stage>
      </Section>

      <Section title="تاگل تکی">
        <Stage>
          <Toggle>
            <Bell />
            اعلان‌ها
          </Toggle>
          <Toggle variant="outline" defaultPressed>
            <Bookmark />
            ذخیره‌شده
          </Toggle>
        </Stage>
      </Section>

      <Section title="پاپ‌اور">
        <Stage>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <SlidersHorizontal />
                فیلترها
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-3">
                <p className="font-bold">چیدمان بر اساس</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>محبوب‌ترین</p>
                  <p>گران‌ترین</p>
                  <p>ارزان‌ترین</p>
                  <p>جدیدترین</p>
                </div>
                <Button size="sm" className="w-full">
                  اعمال فیلتر
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </Stage>
      </Section>

      <Section title="صفحه‌بندی" description="جهت فلش‌ها برای RTL برعکس شده است.">
        <Stage>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">۱</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  ۲
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">۳</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Stage>
      </Section>
    </div>
  )
}
