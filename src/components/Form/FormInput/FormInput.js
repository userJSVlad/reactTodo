import React from 'react'

export default function FormInput({ text, getValueText }) {
   return <input
      type="text"
      value={text}
      onChange={(e) => getValueText(e.target.value)}
      placeholder="add your new todo"
      className="p-2 border-gray-400 border-double border-2 rounded-sm"
   />
}
