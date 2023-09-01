export const typeDefs = `#graphql
type Folder {
    id: String!,
    name: String,
    createdAt: String,
    author:Author,
    notes:[Note]

}

 scalar Date

type Note {
  id:String!,
  content:String,
  updatedAt: Date
}

type Author {
    uid: String!,
    name:String!,
}

type Query {
    folders: [Folder],
    folder(folderId: String!):Folder,
    note(noteId : String): Note
}

type Mutation {
    addNote(content: String!, folderId: ID!): Note,
    addFolder(name: String!): Folder,
    updateNote(id: String!, content: String!): Note,
    register(uid: String!, name:String!): Author
}
`;
