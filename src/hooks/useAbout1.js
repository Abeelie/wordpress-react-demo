import {useQuery, gql} from "@apollo/client";

const GET_ABOUT1 = gql`
    query {
        page(id: "cG9zdDozNA==") {
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

export const useAbout1 = () => {
    const {error, data, loading} = useQuery(GET_ABOUT1);

    return{
        error,
        data,
        loading
    }
}