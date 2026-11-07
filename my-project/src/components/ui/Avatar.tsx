interface AvatarProps {
  name: string
  src?: string
  size?: number
}

export function Avatar({ name, src, size = 40 }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className="avatar"
      style={{ width: size, height: size }}
      aria-label={name}
    >
      {src ? <img src={src} alt="" /> : <span>{initials}</span>}
    </div>
  )
}
