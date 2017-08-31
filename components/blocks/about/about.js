import React from 'react'
import { Image } from 'react-bootstrap'

export default({children, id, blockClass, title, text, quote, imgUrl}) => (
  <div id={id} className={'block ' + (blockClass || '')}>
    <div className='container-small'>
      <h2 className='text-center'>{title}</h2>
      <p>
        {text}
      </p>
      <br />
      <div className='row'>
        <div className='col-sm-4'>
          <Image src={imgUrl} responsive rounded className='profileImage' />
        </div>
        <div className='col-sm-8'>
          <br />
          <blockquote>
            <p>"{quote}"</p>
          </blockquote>
        </div>

        { children }
      </div>

    </div>
  </div>

)
