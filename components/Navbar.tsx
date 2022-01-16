import React from 'react'

const Navbar = (props:any) => {
  return (
    <div {...props}>
      <span>
        Logo
      </span>

      <nav>
        <ul>
          <li>Opcion</li>
          <li>Opcion</li>
          <li>Opcion</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar