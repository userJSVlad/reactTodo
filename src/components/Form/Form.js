import React from 'react'
import FormInput from './FormInput/FormInput';
import FormButton from './FormButton/FormButton';

export default function Form({text, getValueText, addTask}) {
   return (
      <div className="flex justify-cent items-center">
         <FormInput text={text} getValueText={getValueText}/>
         <FormButton addTask={addTask}/>
      </div>
   )
}
