import React from 'react'

function ChapterRating(props) {
  return (
    <div>
       {
         [...Array(props.rate)]?.map((rate)=>{
             return (
                <i class="bi bi-star-fill m-1"></i>
             )
         })
       }
    </div>
  )
}

export default ChapterRating
