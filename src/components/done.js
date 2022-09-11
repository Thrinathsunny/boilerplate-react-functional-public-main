import React from 'react'

const Done = () => {
    const userId = localStorage.getItem("userid");
    const userName= userId.split('@')[0]
  return (
    <div>Hello {userName}</div>
  )
}

export default Done