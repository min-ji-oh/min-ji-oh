import { InputProps } from './interface'

const Input = ({
  label,
  id,
  type,
  placeholder,
  onChange,
  required
}: InputProps) => {
  return (
    <div className='flex gap-x-2 items-center'>
      <label htmlFor={id} className='text-sm min-w-16'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className='rounded bg-gray-100 px-4 py-2 outline-none w-full'
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default Input
