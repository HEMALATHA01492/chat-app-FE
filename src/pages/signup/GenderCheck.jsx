import React from 'react';

const GenderCheck = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex '>
        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text text-gray-200'>Male</span>
                <input  type='checkbox' className='checkbox checkbox-primary border-gray-200'
                name='gender'
                checked={selectedGender === "male"}
                onChange={()=> onCheckboxChange("male")}/>
            </label>
        </div>
        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text text-gray-200'>Female</span>
                <input  type='checkbox' className='checkbox checkbox-primary border-gray-200'
                name='gender'
                checked={selectedGender === "female"}
                onChange={()=> onCheckboxChange("female")}/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheck;