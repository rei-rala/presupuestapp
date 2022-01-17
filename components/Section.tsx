import React from 'react'

const Section: React.FC<{ style: string }> = (props: any) => {
  return (
    <section className={props.style}>
      {props.children}
    </section>
  )
}

export default Section