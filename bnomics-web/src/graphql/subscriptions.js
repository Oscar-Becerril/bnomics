/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreatePost = `subscription OnCreatePost($owner: String!) {
  onCreatePost(owner: $owner) {
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
export const onUpdatePost = `subscription OnUpdatePost($owner: String!) {
  onUpdatePost(owner: $owner) {
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
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment($owner: String!) {
  onCreateComment(owner: $owner) {
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
export const onUpdateComment = `subscription OnUpdateComment($owner: String!) {
  onUpdateComment(owner: $owner) {
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
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
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
export const onCreateVote = `subscription OnCreateVote {
  onCreateVote {
    id
    postId
    createdBy
    createdAt
    vote
  }
}
`;
export const onUpdateVote = `subscription OnUpdateVote {
  onUpdateVote {
    id
    postId
    createdBy
    createdAt
    vote
  }
}
`;
export const onDeleteVote = `subscription OnDeleteVote {
  onDeleteVote {
    id
    postId
    createdBy
    createdAt
    vote
  }
}
`;
