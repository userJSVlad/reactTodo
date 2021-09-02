import React from 'react'
import EmptyStr from './EmptyStr/EmptyStr'
import Item from './Item/Item'
import { useSelector } from 'react-redux';

export default function ListItem({ deleteElement }) {
   let allTasks = useSelector(state => state.allTasks.allTasks);
   return (
      <ul className="max-h-72 overflow-y-auto">
         {allTasks.length === 0 ? <EmptyStr /> :
            allTasks.map((element) => <Item
               key={element.id}
               task={element.text}
               onClick={allTasks}
               deleteElement={deleteElement}
               id={element.id}
            />
            )}
      </ul>
   )
}
