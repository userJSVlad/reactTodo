import React from 'react';


export default function BottomBtn({ clearAll }) {
   return <button
      className="p-1 bg-blue-400 ml-1 rounded text-white 
      hover:bg-purple-700 transition-all" onClick={clearAll}>
      Clear All</button>
}
