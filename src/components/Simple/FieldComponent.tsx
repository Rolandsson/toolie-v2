import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Choice } from "../../model/Choice";

export default ({name, type, tag, placeholder, text, orient, onChange, onSubmit, onClick }: Choice) => {
  const [value, setValue] = useState('');

  const fieldChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    
    if(onChange != undefined) {
      onChange(event.target);
    }
  }

  const fieldKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key == 'Enter') {
      if(onSubmit != undefined) {
        onSubmit(value);
      }
      setValue('');
    }
  }

  return (
    <div>
      {
        (orient == "left" && text != undefined) && <label>{text}</label>
      }
      {
        (tag == "button") && (
          <button type={type} onClick={ onClick }>{text}</button>
        ) || (
          <input
            name={ name }
            value={ value } 
            type={ type }
            placeholder={ placeholder }
            onChange={ fieldChangeHandler } 
            onKeyDown={ fieldKeyHandler } />    
        )
      }
      {
        (orient == "right" && text != undefined) && <label>{text}</label>
      }
    </div>
  )
}
