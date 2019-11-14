/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    userId
    username
    posts {
      items {
        id
        owner
        postContent
        votes
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    userId
    username
    posts {
      items {
        id
        owner
        postContent
        votes
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    userId
    username
    posts {
      items {
        id
        owner
        postContent
        votes
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const createArticle = `mutation CreateArticle($input: CreateArticleInput!) {
  createArticle(input: $input) {
    id
    owner
    postContent
    postImage {
      bucket
      region
      key
    }
    votes
  }
}
`;
export const updateArticle = `mutation UpdateArticle($input: UpdateArticleInput!) {
  updateArticle(input: $input) {
    id
    owner
    postContent
    postImage {
      bucket
      region
      key
    }
    votes
  }
}
`;
export const deleteArticle = `mutation DeleteArticle($input: DeleteArticleInput!) {
  deleteArticle(input: $input) {
    id
    owner
    postContent
    postImage {
      bucket
      region
      key
    }
    votes
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    owner
    postContent
    comments {
      items {
        id
        text
        author
        votes
        owner
      }
      nextToken
    }
    votes
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    owner
    postContent
    comments {
      items {
        id
        text
        author
        votes
        owner
      }
      nextToken
    }
    votes
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    owner
    postContent
    comments {
      items {
        id
        text
        author
        votes
        owner
      }
      nextToken
    }
    votes
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    text
    author
    votes
    post {
      id
      owner
      postContent
      comments {
        nextToken
      }
      votes
    }
    owner
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    text
    author
    votes
    post {
      id
      owner
      postContent
      comments {
        nextToken
      }
      votes
    }
    owner
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    text
    author
    votes
    post {
      id
      owner
      postContent
      comments {
        nextToken
      }
      votes
    }
    owner
  }
}
`;
export const createDebatePost = `mutation CreateDebatePost($input: CreateDebatePostInput!) {
  createDebatePost(input: $input) {
    id
    tags
    owner
    title
    postContent
    comments {
      items {
        id
        text
        author
        votes
        owner
      }
      nextToken
    }
    votes
  }
}
`;
export const updateDebatePost = `mutation UpdateDebatePost($input: UpdateDebatePostInput!) {
  updateDebatePost(input: $input) {
    id
    tags
    owner
    title
    postContent
    comments {
      items {
        id
        text
        author
        votes
        owner
      }
      nextToken
    }
    votes
  }
}
`;
export const deleteDebatePost = `mutation DeleteDebatePost($input: DeleteDebatePostInput!) {
  deleteDebatePost(input: $input) {
    id
    tags
    owner
    title
    postContent
    comments {
      items {
        id
        text
        author
        votes
        owner
      }
      nextToken
    }
    votes
  }
}
`;
export const createDebateComment = `mutation CreateDebateComment($input: CreateDebateCommentInput!) {
  createDebateComment(input: $input) {
    id
    text
    author
    votes
    post {
      id
      tags
      owner
      title
      postContent
      comments {
        nextToken
      }
      votes
    }
    owner
  }
}
`;
export const updateDebateComment = `mutation UpdateDebateComment($input: UpdateDebateCommentInput!) {
  updateDebateComment(input: $input) {
    id
    text
    author
    votes
    post {
      id
      tags
      owner
      title
      postContent
      comments {
        nextToken
      }
      votes
    }
    owner
  }
}
`;
export const deleteDebateComment = `mutation DeleteDebateComment($input: DeleteDebateCommentInput!) {
  deleteDebateComment(input: $input) {
    id
    text
    author
    votes
    post {
      id
      tags
      owner
      title
      postContent
      comments {
        nextToken
      }
      votes
    }
    owner
  }
}
`;
export const createVote = `mutation CreateVote($input: CreateVoteInput!) {
  createVote(input: $input) {
    id
    postId
    createdBy
    createdAt
    vote
  }
}
`;
export const updateVote = `mutation UpdateVote($input: UpdateVoteInput!) {
  updateVote(input: $input) {
    id
    postId
    createdBy
    createdAt
    vote
  }
}
`;
export const deleteVote = `mutation DeleteVote($input: DeleteVoteInput!) {
  deleteVote(input: $input) {
    id
    postId
    createdBy
    createdAt
    vote
  }
}
`;
