import React from 'react'
import { Parallax } from 'react-parallax'
import styles from './styles'

export default({children, id, bgImage, strength, blockClass, titles}) => (
  <div id={id}>
    <Parallax bgImage={bgImage} strength={strength || 200}>
      <div className={'block block-transparent text-center' + (blockClass || '')}>
        {
          titles.map((item, i) => (
            <h1 key={i} className='block-title'>{item}</h1>
          ))
        }
        { children }
      </div>
    </Parallax>
    <style jsx>{styles}</style>
  </div>
)
