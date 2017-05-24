import React from 'react'

const Today=() => {
  return  <p>Today is { new Date().toLocaleDateString() }</p>
}

export default Today;
