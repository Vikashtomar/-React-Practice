import React from 'react'
import Section from './Section'

function Header({name,lname}) {
  return (
    <div>
        <Section name={name} lname = {lname} />
    </div>
  )
}

export default Header