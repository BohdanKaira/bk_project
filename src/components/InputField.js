import { useId } from "react"
import './../scss/components/input.scss'
function InputField({name, blur, change, label, value, error, multy}){
  const inputId = useId();

  function changeHandler(event){
    change(event.target)
  }
  function blurHandler(event){
    blur(event.target)
  }
  return (
    <div className={`form-contact__item ${multy ? 'form-contact__item_full' : ''}`}>
      <div className={error !== '' ? 'did-floating-label-content ' : 'did-floating-label-content '}>
        {multy
          ? <textarea className="form-contact__textarea _border-gradient did-floating-input form-control form-control-lg" type="text" placeholder=" " name={name} id={inputId} onBlur={blurHandler} onChange={changeHandler}>{value}</textarea>
          : <input className="form-contact__input _border-gradient did-floating-input form-control form-control-lg" type="text" placeholder=" " name={name} id={inputId} onBlur={blurHandler} onChange={changeHandler} value={value} />
        }
        <label className="did-floating-label" for={inputId}>{ label }</label>
      </div>
      {error != '' ? (<p className="input-error">{error}</p>) : null}
    </div>
  )
}

export default InputField;