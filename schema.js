export const typeDefs = `#graphql
type User {
    id: ID!
    name: String!
    age: Int!
    isVerified: Boolean!
    email: String!
    posts: [Post]!
}

type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
}

type Query {
    users: [User!]!
    user(id: ID!): User 
    post(id: ID!): Post
    posts: [Post!]!  
}
`;