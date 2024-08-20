import React from 'react'

function Buttons({bg='bg-black',children}) {
  return (
    <>
    <div className={`${bg} p-3 text-white rounded-lg mt-2 mb-4`}>{children}
      </div>
    </>
  )
}

export default Buttons