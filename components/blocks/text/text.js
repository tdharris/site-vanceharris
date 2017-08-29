import React from 'react'
import styles from './styles'

export default({id, blockClass, title, text}) => (
  <div id={id} className={'block ' + (blockClass || '')}>
    <div className='container-small'>
      <h2 className='text-center'>{title}</h2>
      <div className='text-justify' dangerouslySetInnerHTML={{__html: text}} />
    </div>
    <style jsx>{styles}</style>
  </div>

)
