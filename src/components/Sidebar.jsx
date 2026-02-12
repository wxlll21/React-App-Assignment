import { useState, useCallback } from "react"

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems = [] }) {
  // State for new menu item input
  const [newMenuItem, setNewMenuItem] = useState("")
  // TODO 2: Maintain current menu items
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  // State for filter input
  const [filter, setFilter] = useState("")

  // TODO 3: Add a new menu item
  const addMenuItem = useCallback(() => {
    if (!newMenuItem.trim()) return // ignore empty input
    setMenuItems([...menuItems, newMenuItem]) // add new item
    setNewMenuItem("") // clear input after adding
  }, [newMenuItem, menuItems])

  // TODO 4: Filter menu items based on filter input
  const filteredMenuItems = menuItems.filter((item) => {
    const regex = new RegExp(filter, "i") // case-insensitive
    return regex.test(item)
  })

  // TODO 1 & 4: Render filtered menu items
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Add new menu item"
      />
      <br />
      <button onClick={addMenuItem}>
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
