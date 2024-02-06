import React from 'react'
import './spinner.css'


function Spinner() {
  return (
    <div>
        <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
        </div>
    </div>
  )
}

export default Spinner