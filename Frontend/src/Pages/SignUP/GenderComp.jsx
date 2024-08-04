
const GenderComp = () => {
  return (
    <div className="flex gap-1 my-1">
      <div className="form-control flex align-center justify-center">
        <label htmlFor="" className="flex justify-center align-cente">
        <input type="checkbox" name="Male" className="checkbox" />
         <span className="text-center px-5">Male</span>
        </label>
      </div>
      <div>
      <label htmlFor="" className="flex justify-center align-center">
         <span className="px-5">Female</span>
         <input type="checkbox" name="Female" className="checkbox" />
        </label>
      </div>
    </div>
  )
}

export default GenderComp