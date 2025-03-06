import { ElementType, forwardRef } from 'react'

import { IButtonProps } from './interface'
import Link from 'next/link'

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, IButtonProps>(
  ({ href, as, children, className, ...props }, ref) => {
    const Component: ElementType = as || (href ? Link : 'button')

    return (
      <Component ref={ref} {...props} href={href} className={className}>
        {children}
      </Component>
    )
  }
)
Button.displayName = 'Button'

export default Button
