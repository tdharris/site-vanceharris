import React from 'react'
import { Image } from 'react-bootstrap'

export default({id, blockClass, title, text, quote, imgUrl}) => (
  <div id={id} className={'block ' + (blockClass || '')}>
    <div className='container-small'>
      <h2 className='text-center'>{title}</h2>
        <p>
            {text}
        </p>

        <div className="row">
            <div className="col-md-8">
                <br/>
                <blockquote>
                    <p>"{quote}"</p>
                </blockquote>
            </div>
            <div className="col-md-4">
                <Image src={imgUrl} responsive rounded />
            </div>
        </div>

    </div>
  </div>

)
