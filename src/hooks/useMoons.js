import {useQuery, gql} from "@apollo/client";

const GET_MOONS = gql`
    query {
        page(id: "cG9zdDo0Nw==") {
            id
            title
            content
          }
    }
`

export const useMoon = () => {
    const {error, data, loading} = useQuery(GET_MOONS);

    return{
        error,
        data,
        loading
    }
}