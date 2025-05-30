import React from 'react'

interface Item {
  logo: string
  name: string
  description: string
  isActive: boolean
}

interface Props {
  item: Item
  remove: (name: string) => void
  toggleActive: (name: string) => void
}

function ItemWrapper({ item, remove, toggleActive }: Props) {
  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 flex flex-col justify-between">
      <div className="flex items-start gap-4">
        <img src={item.logo} alt={item.name} className="size-10 shrink-0" />

        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-lightgray">{item.description}</p>
        </div>
      </div>


      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => remove(item.name)}
          className="btn btn-outline text-sm rounded-full"
        >
          Remove
        </button>

        <label className="cursor-pointer">
          <input
            type="checkbox"
            checked={item.isActive}
            onChange={() => toggleActive(item.name)}
            className="toggle toggle-info"
          />
        </label>
      </div>
    </div>
  )
}

export default ItemWrapper
