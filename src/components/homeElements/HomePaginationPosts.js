import React from 'react';

import '../../styles/main.scss'

const Posts = ({ posts }) => {

    return (
        <div className="post">
            {posts.map(post => (
                <div key={post.id} className="post-content">
                    <div>
                        <h2 className="post-item">
                            Fundacja "{post.name}"
                        </h2>
                        <h3>Cel i misja: {post.mission}</h3>
                    </div>
                    <h4>{post.items}</h4>
                </div>
            ))}
        </div>
    )
}

export default Posts;