import React from 'react';
import spinner from './spinner.gif'

export default function Spinner() {
  return (
    <div style={{ paddingTop: '110px', paddingBottom: '110px'}}>
      <img src={spinner}
      alt = "Loading..."
      style = {{ width: '200px', margin: 'auto', display: 'block'}} />
    </div>
  )
}
