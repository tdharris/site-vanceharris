import React from 'react'
import styles from './styles'

export default({children, id, blockClass, title, text}) => (
  <div id={id} className={'block ' + (blockClass || '')}>
    <div className='container-small'>
      <h2 className='text-center'>{title}</h2>
      <div className='text-justify' dangerouslySetInnerHTML={{__html: text}} />
      { children }
    </div>
    <style jsx>{styles}</style>
  </div>

)
