import { string } from "prop-types"

export function Field({name, labelText=''}) {
  

  return (
  <div>
    <label style={{fontWeight: 'bold' }} htmlFor={name}>
      {labelText}
    </label>
    <br />
    <input type='text' name={name}/>
  </div> 
  )
}

Field.propTypes = {
  name: string.isRequired,
  labelText: string
}
