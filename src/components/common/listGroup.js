import React from 'react'

export default function ListGroup({ items, textProperty, valueProperty, onItemSelect, selectedItem }) {
    return (
        <ul className="list-group m-2">
            {items.map(item => (
                <li key={item[valueProperty]} style={{ cursor: 'pointer' }} onClick={() => onItemSelect(item)} className={item === selectedItem ? 'list-group-item active' : 'list-group-item'}
                >
                    {item[textProperty]}
                </li>))}
        </ul>
    )
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}