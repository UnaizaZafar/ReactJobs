import React from 'react'

function Buttons({bg='bg-black'}) {
  return (
    <>
      <button className={`${bg} p-3 text-white rounded-lg`}></button>
    </>
  )
}

export default Buttons