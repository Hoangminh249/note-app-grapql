import { graphqlRequest } from "./request";

export const notesLoader = async ({ params: { folderId } }) => {
  const query = `query Folder($folderId: String) {
      folder(folderId: $folderId) {
        id
        name
        notes {
          id
          content
        }
      }
    }`;
  const data = await graphqlRequest({
    query,
    variables: {
      folderId,
    },
  });
  console.log(data);
  return data;
};

export const noteLoader = async ({ params: { noteId } }) => {
  const query = `query Folder($noteId: String) {
        note(noteId: $noteId) {
          content
          id
        }
      }`;
  const data = await graphqlRequest({
    query,
    variables: {
      noteId,
    },
  });
  console.log(data);
  return data;
};
