import Link from 'next/link'
import React from 'react'
import { Parallax } from 'react-parallax'

export default() => (
        
<div className="block block-bordered">
    <div className="container">
        <div className="row">
            <ul className="featured-list featured-list-bordered">
                <div className="col-xs-12 col-md-4">
                    <li>
                        <div className="featured-list-icon">
                            <i className="icon icon-user"></i>
                        </div> 
                        <h3>Quality</h3>
                        <p>
                        Pellentesque maximus, nulla a elementum aliquet, lectus ante iaculis ante, sed fermentum sapien enim eget mi. 
                        Duis egestas pretium lorem sit amet egestas.
                        </p>
                    </li>
                </div>
                <div className="col-xs-12 col-md-4">
                    <li>
                        <div className="featured-list-icon">
                            <i className="icon icon-star"></i>
                        </div>
                        <h3>Service</h3>
                        <p>
                        Maecenas eu nunc in sem pulvinar consequat non quis neque. Vestibulum condimentum et velit in tincidunt. 
                        Morbi at semper velit. Proin aliquet odio eget mollis rhoncus.
                        </p>
                    </li>
                </div>
                <div className="col-xs-12 col-md-4">
                    <li>
                        <div className="featured-list-icon">
                            <i className="icon icon-hair-cross"></i>
                        </div>
                        <h3>Reputation</h3>
                        <p>
                        Curabitur sollicitudin dignissim turpis, vel efficitur tortor viverra ac. Nulla interdum eros sit amet 
                        mauris iaculis, et rhoncus risus egestas.
                        </p>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</div>

)