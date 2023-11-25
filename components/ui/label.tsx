// DONE REVIEWING: GITHUB COMMIT 🕳️
import {Root} from "@radix-ui/react-label"
import {cva, type VariantProps} from "class-variance-authority"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../lib/utils"

export const variants = cva("shc-label peer-disabled:shc-label-disabled")
export const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof variants>
>(({className, ...props}, ref) => (
  <Root ref={ref} className={cn(variants(), className)} {...props} />
))

Label.displayName = Root.displayName
