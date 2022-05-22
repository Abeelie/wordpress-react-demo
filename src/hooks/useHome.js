import {useQuery, gql} from "@apollo/client";

const GET_HOME = gql`
    query {
        page(id: "cG9zdDo2NQ==") {
            title
            content
            featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
    }
`

export const useHome = () => {
    const {error, data, loading} = useQuery(GET_HOME);

    return{
        error,
        data,
        loading
    }
}