import React from 'react'
import BottomBtn from './BottomBtn/BottomBtn'
import ButtomText from './ButtomText/ButtomText'


export default function BottomButton({nameBtn, clearAll}) {
   return (
      <div className="flex space-berween items-center mt-4">
         <ButtomText/>
         <BottomBtn clearAll={clearAll}/>
      </div>
   )
}
