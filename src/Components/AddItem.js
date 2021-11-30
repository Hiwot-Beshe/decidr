import { useState } from "react";
export default function AddItem({ listContainer, setListContainer }) {
    const [newItem, setNewItem] = useState('')
    const formSubmit = (event) => {
        event.preventDefault();
        setListContainer([...listContainer, newItem]);
        console.log('New Item', newItem)
        setNewItem('')
    }
    return (
        <form onSubmit={formSubmit}>
            <input
                id='add-item'
                value={newItem}
                onChange={event => setNewItem(event.target.value)}
                placeholder='Add an item'
            />
            <button id="submit-item" onClick=
                {formSubmit} type='submit'> Add Item</button>
        </form>
    )
}