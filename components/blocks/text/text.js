import React from 'react'

export default ({ children, id, blockClass, title, text }) => (
  <div id={id} className={'block ' + (blockClass || '')}>
    <div className='container-small'>
      <h2 className='text-center'>{title}</h2>
      <div className='text-justify' dangerouslySetInnerHTML={{ __html: text }} />
      {children}
    </div>
  </div>

)
