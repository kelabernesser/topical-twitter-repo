import React from 'react'

export default function Profile(props) {
  return (
    <div>
      <p>{props.firstName}</p>
  <p>{props.bio}</p>
  <p>{props.picture}</p>
    </div>
  )
}
