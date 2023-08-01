// import React from 'react'

// function FileB() {
//   return (
//     <div>FileB</div>
//   )
// }

// export default FileB

import React,{useContext} from 'react'
import { CountContext } from '../../App'
// CountContext

function FileB() {
    const {count} = useContext (CountContext)
  return (
    <div>
        {count}
    </div>
  )
}

export default FileB