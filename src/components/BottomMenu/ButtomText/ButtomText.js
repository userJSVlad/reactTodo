import React from 'react'
import { useSelector } from 'react-redux'

export default function ButtomText() {
   let allTasks = useSelector(state => state.allTasks.allTasks);
   return <h2 className="flex-auto">You have<span className="text-blue-900"> {allTasks.length} </span>padding tasks</h2>
}
