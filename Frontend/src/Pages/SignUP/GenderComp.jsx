
// eslint-disable-next-line react/prop-types
const GenderComp = ({onCheckboxChange,selectedgender}) => {
  return (
    <div className="flex gap-1 my-1">
      <div className="form-control flex align-center justify-center">
        <label htmlFor="" className={`flex justify-center align-center ${selectedgender==='Male'?"selected":""}`}>
        <input type="checkbox" name="Male" className="checkbox"
         checked={selectedgender ==="Male"}
         onChange={()=>onCheckboxChange("Male")}
        />
         <span className="text-center px-5">Male</span>
        </label>
      </div>
      <div>
      <label htmlFor="" className={`flex justify-center align-center ${selectedgender==='Female'?"selected":""}`}>
         <span className="px-5">Female</span>
         <input type="checkbox" name="Female" className="checkbox"  
         checked={selectedgender ==="Female"}
         onChange={()=>onCheckboxChange("Female")}
         />
        </label>
      </div>
    </div>
  )
}

export default GenderComp