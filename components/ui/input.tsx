// DONE REVIEWING: GITHUB COMMIT 🕳️
import {InputHTMLAttributes, forwardRef} from "react"
import {cn} from "../../lib/utils"

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({type, className, ...props}, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn("shc-input", className)}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"
