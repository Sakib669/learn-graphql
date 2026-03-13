export const typeDefs = `$graphql
tyep User {
    id: ID!
    name: String!
    age: Int!
    isVerified: Boolean!
    email: String!
}

    type Query {
    users: [User!]!
    user(id: ID!): User 
    }

`;
