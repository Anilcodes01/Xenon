import React from 'react'

const GenderCheckbox = ({onchechkBoxChange, selectedGender}) => {
  return (
    <div className='flex  mr-48'>
        <div className='form-control'>
   <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected': ""}`}>
    <span className='label-text'>Male</span>
    <input checked={selectedGender === 'male'} onChange={() => {
      onchechkBoxChange('male')
    }} type="checkbox" className='checkbox border-slate-900' />
   </label>
        </div>
        <div className='form-control'>
   <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected': ""}`}>
    <span className='label-text'>Female</span>
    <input checked={selectedGender === 'female'} onChange={() => {
      onchechkBoxChange('female')
    }} type="checkbox" className='checkbox border-slate-900 ' />
   </label>
        </div>
    </div>
  )
}

export default GenderCheckbox