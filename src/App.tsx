import Navbar from './components/Navbar'
import data from './constants/data'
import ItemWrapper from './components/ItemWrapper'
import { useState } from 'react'

type OneActive = 'all' | 'active' | 'inactive'

const App = () => {
  const [exList, setExList] = useState(data)
  const [oneActive, setOneActive] = useState<OneActive>('all')

  const handleRemove = (name: string) =>
    setExList(prev => prev.filter(item => item.name !== name))

  const toggleActive = (name: string) =>
    setExList(prev =>
      prev.map(item =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    )

  return (
    <div className="px-4 py-8 sm:px-8 md:px-20">
      <Navbar />

      {/* header bar */}
     <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center mt-10 gap-4">

        <h2 className="text-3xl font-bold">Extensions List</h2>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setOneActive('all')}
            className={`btn ${
              oneActive === 'all' ? 'btn-info' : 'btn-outline btn-info'
            } rounded-full`}
          >
            All
          </button>
          <button
            onClick={() => setOneActive('active')}
            className={`btn ${
              oneActive === 'active' ? 'btn-info' : 'btn-outline btn-info'
            } rounded-full`}
          >
            Active
          </button>
          <button
            onClick={() => setOneActive('inactive')}
            className={`btn ${
              oneActive === 'inactive' ? 'btn-info' : 'btn-outline btn-info'
            } rounded-full`}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* optional logo */}
      {/* <img src={logoDevLens} alt="DevLens logo" className="my-8 w-32" /> */}

      {/* list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {exList
          .filter(item => {
            if (oneActive === 'active') return item.isActive
            if (oneActive === 'inactive') return !item.isActive
            return true
          })
          .map(item => (
            <ItemWrapper
              key={item.name}
              item={item}
              remove={handleRemove}
              toggleActive={toggleActive}
            />
          ))}
      </div>
    </div>
  )
}

export default App
