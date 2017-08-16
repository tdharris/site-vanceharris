import Link from 'next/link'
import React from 'react'

import styles from './styles'

export default(props) => (

<div className="block">
    <h1>Recent Blog Posts</h1>
    <ul>
        {
        props.posts.map( (blog, i) => (
            <li key={i}>
            <Link href={blog.link}>
                <a>{blog.title}</a>
            </Link>
            </li>
        ))
        }
    </ul>
    <style jsx>{styles}</style>
</div>  
        
)
