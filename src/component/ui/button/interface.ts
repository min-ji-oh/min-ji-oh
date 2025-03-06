import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react'

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof ButtonHTMLAttributes<HTMLButtonElement>
    > {
  color?: string
  as?: ElementType
}
