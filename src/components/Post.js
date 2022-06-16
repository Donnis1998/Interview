import React, { useEffect, useState } from 'react'

export default function Post() {


    const [postList, setPostList] = useState([])

    useEffect(() => {
        _GetPost()
    }, [])


    const _GetPost = () => {

        fetch('https://jsonplaceholder.typicode.com/posts/').then(res => {
            return res.json()
        }).then(data => {

            setPostList(data)
            console.log('POST', data)
        })
    }


    return (
        <div>
            <h1>All Post</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                {postList.map(data => {
                    return <div className='post-item'>
                        <h4 style={{ marginInline: '20px' }}>{data.title}</h4>
                        <p className="post-body">{data.body}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
