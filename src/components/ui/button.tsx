import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Button — every visual state lives in this one `cva` block, so a consuming
 * project restyles the button by editing here and nowhere else.
 *
 * Brand variants:
 *   default → brand blue (#263e97)
 *   accent  → brand orange (#FC9003)   ← the "second color"
 *   success → green (prices / positive)
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:scale-[.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90",
        accent:
          "bg-brand-accent text-brand-accent-foreground shadow-[var(--shadow-soft)] hover:bg-brand-accent/90",
        success:
          "bg-success text-success-foreground shadow-[var(--shadow-soft)] hover:bg-success/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[var(--shadow-soft)] hover:bg-destructive/90 focus-visible:ring-destructive/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline active:scale-100",
      },
      size: {
        sm: "h-9 gap-1.5 rounded-lg px-3.5 text-[13px] has-[>svg]:px-3",
        default: "h-11 px-5 has-[>svg]:px-4",
        lg: "h-12 rounded-xl px-7 text-base has-[>svg]:px-6",
        icon: "size-11",
        "icon-sm": "size-9 rounded-lg",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
