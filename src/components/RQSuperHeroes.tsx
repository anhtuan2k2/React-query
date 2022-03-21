import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
interface IPerson {
    // id: number;
    // name: string;
    // alterEgo: any;
}
const RQSuperHeroes = () => {
    // useEffect(() => {
    //     console.log("data", data);
    // }, [data]);
    const fetchData = () => {
        return axios.get("http://localhost:4000/superheroes")
    }
    const { isLoading, data, error, isError, isFetching } = useQuery<any, Error>("super-heroes", fetchData,
        // { cacheTime: 5000 }
        { staleTime: 30000 }
    );
    console.log({ isFetching, isLoading });
    if (isLoading) {
        return <h2>Is loadinssssg</h2>
    }
    if (isError) {
        return <h2>{error?.message}</h2>
    }
    return (
        <div>
            <div>screen for react-query</div>
            <div>{data?.data.map((hero: any) => <div key={hero.id}>{hero.name}</div>)}</div>
        </div>
    )
}

export default RQSuperHeroes