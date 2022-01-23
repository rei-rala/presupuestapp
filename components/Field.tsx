import React, { useState, useEffect } from 'react'

const Field = (props: any) => {
  const [content, setContent] = useState(props.content)
  const [editing, setEditing] = useState(false)
  const [variantClass, setVariantClass] = useState(props.content === '_' ? 'nulled' : '')

  const toggleEditing = () => setEditing(!editing)

  const changeHandler = (e: any) => {
    const newValue = e.target.value[0] === '_' ? e.target.value.substr(1) : e.target.value
    setContent(newValue)
  }

  useEffect(() => {
    content === '' && setContent('_')
    setVariantClass(content === '_' ? 'nulled' : '')
  }, [content])


  return (
    <td {...props}>
      {
        editing
          ? <input
            className={variantClass}
            type="text"
            value={content}
            onChange={changeHandler}
            onBlur={toggleEditing}
          />
          : <span
            className={variantClass}
            onClick={toggleEditing}
          >
            {content}
          </span>
      }
    </td>
  )
}

export default Field