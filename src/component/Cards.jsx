import React from 'react'

function Cards({children,bg='bg-gray-100'}) {
  return (
    <>
        <div className={ `${bg} p-6 m-5  rounded-lg shadow-md w-1/3`}>{children}
          
        </div>
    </>
  )
}

export default Cards