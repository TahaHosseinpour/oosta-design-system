"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      dir="rtl"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-success" />,
        info: <InfoIcon className="size-4 text-primary" />,
        warning: <TriangleAlertIcon className="size-4 text-warning" />,
        error: <OctagonXIcon className="size-4 text-destructive" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group !gap-3 !rounded-2xl !border-border !bg-popover !text-popover-foreground !shadow-[var(--shadow-card)]",
          title: "!text-sm !font-bold",
          description: "!text-[13px] !text-muted-foreground",
          actionButton:
            "!rounded-lg !bg-primary !text-primary-foreground !text-xs !font-medium",
          cancelButton:
            "!rounded-lg !bg-secondary !text-secondary-foreground !text-xs !font-medium",
          closeButton: "!rounded-lg !border-border",
        },
      }}
      style={
        {
          fontFamily: "var(--font-sans)",
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "calc(var(--radius) + 8px)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
