import { Input } from '@/components/ui'

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export function SearchBar({
  placeholder = 'Search here',
  value,
  onChange,
}: SearchBarProps) {
  return (
    <Input
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      aria-label="Search"
    />
  )
}
