/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($userName: String!) {
    getUser(userName: $userName) {
      userName
      password
      sevenSuccess
      sevenTotal
      sixSuccess
      sixTotal
      fiveSuccess
      fiveTotal
      fourSuccess
      fourTotal
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $userName: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      userName: $userName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userName
        password
        sevenSuccess
        sevenTotal
        sixSuccess
        sixTotal
        fiveSuccess
        fiveTotal
        fourSuccess
        fourTotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
