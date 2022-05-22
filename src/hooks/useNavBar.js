import {useQuery, gql} from "@apollo/client";

const GET_NAVBAR_NAMES = gql`
    query {
        pages{
          edges {
            node {
              id
              title
            }
          }
        }
    }
`

export const useNavbar = () => {
    const {error, data, loading} = useQuery(GET_NAVBAR_NAMES);

    return{
        error,
        data,
        loading
    }
}