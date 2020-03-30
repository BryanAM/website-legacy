export const REPO_QUERY = `
query { 
  user(login: "BryanAM"){
    repositories(orderBy: {direction: DESC field: CREATED_AT} first: 3 privacy: PUBLIC){
      edges {
        node {
          url
        	description
          name
          repositoryTopics(first: 3){
            edges{
              node{
                topic{
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`;