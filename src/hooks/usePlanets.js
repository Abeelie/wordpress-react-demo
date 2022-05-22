import {useQuery, gql} from "@apollo/client";

const GET_PLANETS = gql`
    query {
        page(id: "cG9zdDozOA==") {
            id
            title
            content
          }
    }
`

export const usePlanets = () => {
    const {error, data, loading} = useQuery(GET_PLANETS);

    return{
        error,
        data,
        loading
    }
}