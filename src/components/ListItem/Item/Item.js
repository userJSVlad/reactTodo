import React from 'react'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';


export default function Item({ task, deleteElement, id }) {
   const dispatch = useDispatch()
   return (
      <li className="p-2 mt-2 bg-gray-300 flex space-berween items-start relative">{task}
         <FontAwesomeIcon className="absolute right-3 bottom-2.5 text-lg 
         opacity-0 hover:opacity-100 transition-opacity"
            onClick={() => dispatch(deleteElement(id))}
            icon={faTrashAlt}
         />
      </li>
   )
}