import { graphqlRequest } from "./request";

export const foldersLoader = async () => {
  const query = `query Folder {
      folders {
        id
        name
        createdAt
      }
    }`;

  const data = await graphqlRequest({ query });
  console.log(data);
  return data;
};
