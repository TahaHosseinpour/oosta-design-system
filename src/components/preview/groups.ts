/** Single source of truth for the preview navigation and the index page. */
export type PreviewGroup = {
  slug: string
  title: string
  description: string
  components: string[]
}

export const previewGroups: PreviewGroup[] = [
  {
    slug: "buttons",
    title: "دکمه‌ها",
    description: "واریانت‌ها، اندازه‌ها و حالت‌های دکمه",
    components: ["Button"],
  },
  {
    slug: "forms",
    title: "فرم‌ها",
    description: "ورودی، متن چندخطی، انتخاب، رادیو، چک‌باکس و سوییچ",
    components: [
      "Input",
      "Textarea",
      "Label",
      "Select",
      "RadioGroup",
      "Checkbox",
      "Switch",
    ],
  },
  {
    slug: "controls",
    title: "کنترل‌ها",
    description: "اسلایدر، تاگل، پاپ‌اور و صفحه‌بندی",
    components: ["Slider", "Toggle", "ToggleGroup", "Popover", "Pagination"],
  },
  {
    slug: "feedback",
    title: "بازخورد",
    description: "آکاردیون، هشدار و دیالوگ تأیید",
    components: ["Accordion", "Alert", "AlertDialog"],
  },
  {
    slug: "data-display",
    title: "نمایش داده",
    description: "کارت، بَج، آواتار، جدول و نوار پیشرفت",
    components: ["Card", "Badge", "Avatar", "Table", "Progress", "Skeleton"],
  },
  {
    slug: "charts",
    title: "نمودارها",
    description: "نمودار خطی، ناحیه‌ای، ستونی و دایره‌ای با پالت برند",
    components: ["Chart"],
  },
  {
    slug: "overlays",
    title: "لایه‌ها و منوها",
    description: "دیالوگ، شیت، منوی کشویی، تولتیپ و اعلان",
    components: ["Dialog", "Sheet", "DropdownMenu", "Tooltip", "Sonner"],
  },
  {
    slug: "navigation",
    title: "ناوبری",
    description: "تب‌ها، مسیر راهنما و جداکننده",
    components: ["Tabs", "Breadcrumb", "Separator"],
  },
]
