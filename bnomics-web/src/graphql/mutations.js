/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    posts {
      items {
        id
        postContent
        votes
        owner
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
    username
    posts {
      items {
        id
        postContent
        votes
        owner
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
    username
    posts {
      items {
        id
        postContent
        votes
        owner
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    postContent
    postImage {
      bucket
      region
      key
    }
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
    owner
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    postContent
    postImage {
      bucket
      region
      key
    }
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
    owner
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    postContent
    postImage {
      bucket
      region
      key
    }
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
    owner
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
      postContent
      postImage {
        bucket
        region
        key
      }
      comments {
        nextToken
      }
      votes
      owner
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
      postContent
      postImage {
        bucket
        region
        key
      }
      comments {
        nextToken
      }
      votes
      owner
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
      postContent
      postImage {
        bucket
        region
        key
      }
      comments {
        nextToken
      }
      votes
      owner
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
