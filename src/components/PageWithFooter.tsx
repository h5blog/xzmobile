import type { ReactNode } from 'react'
import MobileFooter from './MobileFooter'

export default function PageWithFooter({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <MobileFooter />
    </>
  )
}
