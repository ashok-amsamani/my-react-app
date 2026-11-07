import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  return (
    <label className="input-field" htmlFor={id}>
      {label ? <span className="input-field__label">{label}</span> : null}
      <input id={id} className={`input ${className}`.trim()} {...props} />
    </label>
  )
}
