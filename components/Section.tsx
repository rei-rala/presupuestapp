import React from 'react'

const Section = (props: any) => {
  return (
    <section {...props}>
      {props.children}
    </section>
  )
}

export default Section