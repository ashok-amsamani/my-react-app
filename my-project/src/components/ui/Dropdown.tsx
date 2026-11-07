import type { SelectHTMLAttributes } from 'react'

interface DropdownOption {
  label: string
  value: string
}

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[]
}

export function Dropdown({ options, className = '', ...props }: DropdownProps) {
  return (
    <select className={`dropdown ${className}`.trim()} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
