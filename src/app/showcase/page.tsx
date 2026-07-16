import Link from "next/link"
import { ArrowLeft, Smartphone, Monitor } from "lucide-react"

import { examples } from "@/components/shell/examples"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ShowcaseOverview() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">نمونه‌کارها</h1>
        <p className="text-muted-foreground">
          صفحات کامل و واقعی که فقط با کامپوننت‌های همین دیزاین‌سیستم ساخته شده‌اند.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {examples.map((ex) => (
          <Link key={ex.slug} href={`/showcase/${ex.slug}`} className="group">
            <Card className="h-full transition-shadow hover:shadow-[0_8px_28px_-8px_rgb(38_62_151/0.22)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{ex.title}</CardTitle>
                  <ArrowLeft className="size-4 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                </div>
                <CardDescription>{ex.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="gap-1.5">
                  {ex.device === "mobile" ? (
                    <>
                      <Smartphone className="size-3" />
                      موبایل
                    </>
                  ) : (
                    <>
                      <Monitor className="size-3" />
                      دسکتاپ
                    </>
                  )}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
