import React from 'react'
import { v4 as uuid } from 'uuid'
function Rating({ value, text, color }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((rate) => {
        return (
          <span key={uuid()}>
            <i
              style={{ color }}
              className={
                value + 1 === rate + 0.5
                  ? 'fas fa-start-half-alt'
                  : value >= rate
                  ? 'fas fa-star'
                  : 'far fa-star'
              }
            ></i>
          </span>
        )
      })}
      <span>{text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#FFA41C',
}

export default Rating
