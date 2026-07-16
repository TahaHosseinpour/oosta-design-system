import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { previewGroups } from "@/components/preview/groups"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PreviewOverview() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">پیش‌نمایش کامپوننت‌ها</h1>
        <p className="text-muted-foreground">
          هر گروه را باز کن تا واریانت‌ها و حالت‌های آن را ببینی.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {previewGroups.map((group) => (
          <Link key={group.slug} href={`/preview/${group.slug}`} className="group">
            <Card className="h-full transition-shadow hover:shadow-[0_8px_28px_-8px_rgb(38_62_151/0.22)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{group.title}</CardTitle>
                  <ArrowLeft className="size-4 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                </div>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <div className="flex flex-wrap gap-1.5">
                {group.components.map((c) => (
                  <Badge key={c} variant="secondary">
                    {c}
                  </Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
