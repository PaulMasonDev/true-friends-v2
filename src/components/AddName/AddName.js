import React from 'react'

const AddName = (props) => {
  const handleChange = (e) => {
    props.handleName(e.target.value)
  }
  return (
    <form className="homepage__names__add__search">
      <input onChange={handleChange} type="Search" placeholder="Add/Search Name" />
      <button>+</button>
    </form> 
  )
}

export default AddName;