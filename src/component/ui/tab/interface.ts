export interface ITabItem {
  id: string
  label: string
}

export interface ITabProps {
  items: ITabItem[]
  selectedId: number
  onSelect: (id: string) => void
  type?: 'toggle' | 'default'
}