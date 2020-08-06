import React from 'react'

export default function ListGroup(props) {
    const {items, onItemSelect, selectedGenre} = props;
    return (
            <ul className="list-group m-2">
            <li key={0} style={{cursor:'pointer'}} className={selectedGenre==='all'?'list-group-item active':'list-group-item'} onClick={()=>onItemSelect('all')}>All genres</li>
               {items.map( item =><li key={item._id} style={{cursor:'pointer'}} onClick={()=>onItemSelect(item.name)} className={selectedGenre===item.name?'list-group-item active':'list-group-item'}>{item.name}</li>)} 
            </ul>
    )
}
