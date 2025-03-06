export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  type: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
