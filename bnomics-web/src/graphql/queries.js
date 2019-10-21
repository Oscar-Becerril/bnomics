/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        postContent
        votes
        owner
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
