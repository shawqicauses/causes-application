// DONE REVIEWING: GITHUB COMMIT 🕳️
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"
import {ButtonHTMLAttributes, forwardRef} from "react"
import {cn} from "../../lib/utils"

export const variants = cva("shc-button", {
  variants: {
    variant: {
      primary: "shc-button-primary",
      secondary: "shc-button-secondary",
      accent: "shc-button-accent",
      outline: "shc-button-outline",
      ghost: "shc-button-ghost"
    },
    size: {
      default: "shc-button-default",
      sm: "shc-button-sm",
      lg: "shc-button-lg",
      icon: "shc-button-icon"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "default"
  }
})

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({variant, size, asChild = false, className, ...props}, ref) => {
    const Component = asChild ? Slot : "button"
    return (
      <Component
        ref={ref}
        className={cn(variants({variant, size, className}))}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
Button.defaultProps = {asChild: false}
