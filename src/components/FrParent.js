import React from 'react'

// function FrParent() {
//   return (
//     <div>
//       <input type = "text" />
//     </div>
//   )
// }

const FrParent = React.forwardRef((props, ref) => {
      return (
    <div>
      <input type = "text" ref = {ref}/>
    </div>
  )
}
)

export default FrParent
