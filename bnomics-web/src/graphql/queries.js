/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      username
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getArticle = `query GetArticle($id: ID!) {
  getArticle(id: $id) {
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
export const listArticles = `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      postContent
      comments {
        nextToken
      }
      votes
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      author
      votes
      post {
        id
        owner
        postContent
        votes
      }
      owner
    }
    nextToken
  }
}
`;
export const getDebatePost = `query GetDebatePost($id: ID!) {
  getDebatePost(id: $id) {
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
export const listDebatePosts = `query ListDebatePosts(
  $filter: ModelDebatePostFilterInput
  $limit: Int
  $nextToken: String
) {
  listDebatePosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getDebateComment = `query GetDebateComment($id: ID!) {
  getDebateComment(id: $id) {
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
export const listDebateComments = `query ListDebateComments(
  $filter: ModelDebateCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDebateComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        votes
      }
      owner
    }
    nextToken
  }
}
`;
export const getVote = `query GetVote($id: ID!) {
  getVote(id: $id) {
    id
    postId
    createdBy
    createdAt
    vote
  }
}
`;
export const listVotes = `query ListVotes(
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      createdBy
      createdAt
      vote
    }
    nextToken
  }
}
`;
export const votesByUser = `query VotesByUser(
  $createdBy: ID
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  votesByUser(
    createdBy: $createdBy
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      createdBy
      createdAt
      vote
    }
    nextToken
  }
}
`;
export const searchArticles = `query SearchArticles(
  $filter: SearchableArticleFilterInput
  $sort: SearchableArticleSortInput
  $limit: Int
  $nextToken: String
) {
  searchArticles(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
