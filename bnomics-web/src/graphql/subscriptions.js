/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = `subscription OnCreateArticle($owner: String!) {
  onCreateArticle(owner: $owner) {
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
export const onUpdateArticle = `subscription OnUpdateArticle($owner: String!) {
  onUpdateArticle(owner: $owner) {
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
export const onDeleteArticle = `subscription OnDeleteArticle($owner: String!) {
  onDeleteArticle(owner: $owner) {
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
export const onCreatePost = `subscription OnCreatePost($owner: String!) {
  onCreatePost(owner: $owner) {
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
export const onUpdatePost = `subscription OnUpdatePost($owner: String!) {
  onUpdatePost(owner: $owner) {
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
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment($owner: String!) {
  onCreateComment(owner: $owner) {
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
export const onUpdateComment = `subscription OnUpdateComment($owner: String!) {
  onUpdateComment(owner: $owner) {
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
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
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
export const onCreateDebatePost = `subscription OnCreateDebatePost {
  onCreateDebatePost {
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
export const onUpdateDebatePost = `subscription OnUpdateDebatePost($owner: String) {
  onUpdateDebatePost(owner: $owner) {
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
export const onDeleteDebatePost = `subscription OnDeleteDebatePost($owner: String) {
  onDeleteDebatePost(owner: $owner) {
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
export const onCreateDebateComment = `subscription OnCreateDebateComment($owner: String) {
  onCreateDebateComment(owner: $owner) {
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
export const onUpdateDebateComment = `subscription OnUpdateDebateComment($owner: String) {
  onUpdateDebateComment(owner: $owner) {
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
export const onDeleteDebateComment = `subscription OnDeleteDebateComment($owner: String) {
  onDeleteDebateComment(owner: $owner) {
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
