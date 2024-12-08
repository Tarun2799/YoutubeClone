import React from 'react'

//  N - level nesting comments.

const commentsData = [
    {
        id: 1,
        user: "John Doe",
        text: "This is a comment.",
        imgSrc: "/user.png",
        replies: [
                {
                    id: 1.1,
                    user: "Jane Doe",
                    text: "This is a reply.",
                    imgSrc: "/user.png",
                    replies: [
                                {
                                    id: 1.11,  
                                    user: "John Doe",
                                    text: "This is another reply.",
                                    imgSrc: "/user.png",
                                    replies: [],
                                }
                            ],
                },
                {
                    id: 1.2,
                    user: "Jenna Doe",
                    text: "This is a reply.",
                    imgSrc: "/user.png",
                    replies: [],
                },
        ],
    },
    {
        id: 2,
        user: "James rogan",
        text: "This is a comment.",
        imgSrc: "/user.png",
        replies: [
                {
                    id: 2.1,
                    user: "Jimmy rogan",
                    text: "This is a reply.",
                    imgSrc: "/user.png",
                    replies: [
                                {
                                    id: 2.11,  
                                    user: "Clark kent",
                                    text: "This is another reply.",
                                    imgSrc: "/user.png",
                                    replies: [
                                        {
                                            id: 2.111,  
                                            user: "Emma",
                                            text: "This is another reply.",
                                            imgSrc: "/user.png",
                                            replies: [],
                                        }
                                    ],
                                }
                            ],
                },
                {
                    id: 2.2,
                    user: "Spidy",
                    text: "This is a reply.",
                    imgSrc: "/user.png",
                    replies: [
                        {
                            id: 2.21,  
                            user: "Hulk",
                            text: "This is another reply.",
                            imgSrc: "/user.png",
                            replies: [],
                        }
                    ],
                },
        ],
    },
    {
        id: 3,
        user: "Tony Stark",
        text: "This is a comment.",
        imgSrc: "/user.png",
        replies: [
            {
                id: 3.1,
                user: "Bruce Banner",
                text: "This is a reply.",
                imgSrc: "/user.png",
                replies: [
                    {
                        id: 3.11,  
                        user: "Thor",
                        text: "This is another reply.",
                        imgSrc: "/user.png",
                        replies: [
                            {
                                id: 3.111,  
                                user: "Loki",
                                text: "This is another reply.",
                                imgSrc: "/user.png",
                                replies: [
                                    {
                                        id: 3.1111,  
                                        user: "Thanos",
                                        text: "This is another reply.",
                                        imgSrc: "/user.png",
                                        replies: [
                                            {
                                                id: 3.11111,  
                                                user: "Captain America",
                                                text: "This is another reply.",
                                                imgSrc: "/user.png",
                                                replies: [{
                                                    id: 3.111111,  
                                                    user: "Hawkeye",
                                                    text: "This is another reply.",
                                                    imgSrc: "/user.png",
                                                    replies: [{
                                                        id: 3.1111111,  
                                                        user: "Black Widow",
                                                        text: "This is another reply.",
                                                        imgSrc: "/user.png",
                                                        replies: [{
                                                            id: 3.11111111,  
                                                            user: "Scarlet Witch",
                                                            text: "This is another reply.",
                                                            imgSrc: "/user.png",
                                                            replies: [{
                                                                id: 3.111111111,  
                                                                user: "Doctor Strange",
                                                                text: "This is another reply.",
                                                                imgSrc: "/user.png",
                                                                replies: [],
                                                            }],
                                                        }],
                                                    }],
                                                }],
                                            }
                                        ],
                                    }
                                ],
                            }
                        ],
                    }
                ],
            }
        ],
    }
];


// Let's build a single comment structure logic
const Comment = ({data}) => {

    const {user, text, imgSrc} = data;

    return (
        <div className='flex gap-2 bg-slate-100 p-2 m-2 rounded-lg'>
            <img src={imgSrc} alt='user' className='w-10 h-10 rounded-full'/>
            <div>
                <p>{user}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

// we are using here RECURSION to built our list.
const CommentsList = ({comments}) => {
    
    return (
        comments.map( (comment) => (
            <div>
                <Comment data={comment} key={comment.id} />
                {/* replies */}
                <div className='pl-5 ml-5 border border-l-black'>
                    {comment.replies.length > 0 && (
                        // here comments list not comment component ? becoz replies can be nested, like a list of lists
                        <CommentsList comments={comment.replies} />
                    )}
                </div>
            </div>
        ))
    )
} 
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;