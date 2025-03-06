import { ITabProps } from "./interface"
import clsx from "clsx"

const Tab = ({items, selectedId, onSelect, type = 'default'}: ITabProps) => {
  const tabWrapperClass = clsx([
    type === 'default' ? 'flex gap-2' : 'flex gap-2 bg-[#282E33] rounded w-fit p-1',
  ])
  return (
    <ul className={tabWrapperClass}>
      {items.map((item, index) => {
        return(
        <li
          key={item.id}
          className={clsx(
            type === 'default' 
            ? [
                'py-3 px-7 rounded cursor-pointer scr-md:px-0 scr-md:text-center scr-md:w-20 scr-md:text-14',
                selectedId === index ? "bg-white text-[#161A1D] font-semibold" : "bg-[#90979E] text-[#3E464D]",
              ]
            : [
                'rounded cursor-pointer text-center scr-md:text-12 w-[100px] py-2',
                selectedId === index ? "animate-flicker duration-75 bg-white text-[#161A1D] font-semibold" : "text-white",
              ]
          )}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </li>
      )})}
    </ul>
  )
}

export default Tab
