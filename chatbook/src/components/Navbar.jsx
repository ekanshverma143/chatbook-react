import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> ChatBook</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/17626907/pexels-photo-17626907/free-photo-of-blonde-woman-in-yellow-clothes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Ekansh</span>
        <button>Logout</button>
      </div>

    </div>
  )
}
