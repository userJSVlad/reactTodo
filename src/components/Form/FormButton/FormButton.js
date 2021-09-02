import React from 'react'

export default function FormButton({ addTask }) {
   return <button type="submit" className="p-2 bg-blue-400 border-double border-2 border-blue-400 
   ml-1 rounded text-white hover:bg-purple-700 
   transition-all hover:border-purple-700" onClick={addTask}>Add task</button>

}
