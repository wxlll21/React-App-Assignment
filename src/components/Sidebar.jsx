import { useState, useCallback } from "react"

export default function Sidebar({ initialMenuItems = [] }) {
  const [input, setInput] = useState("") // new item input
  const [menuList, setMenuList] = useState(initialMenuItems) // current menu items
  const [search, setSearch] = useState("") // filter text

  const addItem = useCallback(() => {
    if (!input.trim()) return // skip empty
    setMenuList([...menuList, input]) // add new item
    setInput("") // reset input
  }, [input, menuList])

  const visibleItems = menuList.filter(item => {
    const regex = new RegExp(search, "i") // case-insensitive
    return regex.test(item)
  })

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a menu item"
      />
      <br />
      <button onClick={addItem}>Add</button>
      <br />
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Filter items"
      />
      <ul>
        {visibleItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
