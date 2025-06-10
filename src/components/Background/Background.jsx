import React from 'react'

function Background({children}) {
  return (
    <div className=" bg-black min-h-screen text-white">
      {children}
    </div>
  );
}

export default Background