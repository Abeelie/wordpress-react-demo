import {useQuery, gql} from "@apollo/client";

const GET_ABOUT2 = gql`
    query {
        page(id: "cG9zdDo2Mw==") {
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

export const useAbout2 = () => {
    const {error, data, loading} = useQuery(GET_ABOUT2);

    return{
        error,
        data,
        loading
    }
}