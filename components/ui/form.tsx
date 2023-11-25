// DONE REVIEWING: GITHUB COMMIT 🕳️
import {Root} from "@radix-ui/react-label"
import {Slot} from "@radix-ui/react-slot"
import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  useContext,
  useId,
  useMemo
} from "react"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext
} from "react-hook-form"
import {cn} from "../../lib/utils"
import {Label as FormLabel} from "./label"

// TYPES
type TFieldContext<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {name: TName}
type TItemContext = {id: string}

// CONTEXTS
const FieldContext = createContext<TFieldContext>({} as TFieldContext)
const ItemContext = createContext<TItemContext>({} as TItemContext)

// ELEMENTS
// 0. FORM
const Form = FormProvider

// 1.0 FIELD/PROVIDER
const Field = function Field<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({...props}: ControllerProps<TFieldValues, TName>) {
  const value = useMemo(() => ({name: props.name}), [props.name])
  const {Provider} = FieldContext

  return (
    <Provider value={value}>
      <Controller {...props} />
    </Provider>
  )
}

// 1.1 FIELD/HOOK
const useField = function useField() {
  const fieldContext = useContext(FieldContext)
  const itemContext = useContext(ItemContext)
  const {getFieldState, formState} = useFormContext()
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext)
    throw new Error("(React Hook) must be used with-in its (Provider)")
  const {id} = itemContext

  return {
    id,
    name: fieldContext.name,
    itemId: `${id}-item`,
    descriptionId: `${id}-item-description`,
    messageId: `${id}-item-message`,
    ...fieldState
  }
}

// 2. ITEM
const Item = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => {
    const id = useId()
    const value = useMemo(() => ({id}), [id])
    const {Provider} = ItemContext

    return (
      <Provider value={value}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </Provider>
    )
  }
)

// 3. LABEL
const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({className, ...props}, ref) => {
  const {itemId, error} = useField()
  return (
    <FormLabel
      ref={ref}
      htmlFor={itemId}
      className={cn(error ? "text-red-500" : "", className)}
      {...props}
    />
  )
})

// 4. CONTROL
const Control = forwardRef<
  ElementRef<typeof Slot>,
  ComponentPropsWithoutRef<typeof Slot>
>(({...props}, ref) => {
  const {itemId, descriptionId, messageId, error} = useField()
  const describedby = !error ? descriptionId : `${descriptionId} ${messageId}`
  const invalid = Boolean(error)

  return (
    <Slot
      id={itemId}
      ref={ref}
      aria-describedby={describedby}
      aria-invalid={invalid}
      {...props}
    />
  )
})

// 5. DESCRIPTION
const Description = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => {
  const {descriptionId} = useField()
  return (
    <p
      id={descriptionId}
      ref={ref}
      className={cn("label", className)}
      {...props}
    />
  )
})

// 6. MESSAGE
const Message = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({className, children, ...props}, ref) => {
  const {messageId, error} = useField()
  const body = error ? String(error.message) : children
  if (!body) return null

  return (
    <p
      id={messageId}
      ref={ref}
      className={cn("label text-red-500", className)}
      {...props}>
      {body}
    </p>
  )
})

// DISPLAY
Item.displayName = "Item"
Label.displayName = "Label"
Control.displayName = "Control"
Description.displayName = "Description"
Message.displayName = "Message"

// COMPOSITION
Field.Item = Item
Field.Label = Label
Field.Control = Control
Field.Description = Description
Field.Message = Message

// EXPORTING
export {Control, Description, Field, Form, Item, Label, Message, useField}
