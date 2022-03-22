import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface Data {
    id: number;
    name: string;
}
const Test = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<any>();
    useEffect(() => {

        axios.get("http://localhost:3000/superheroes").then((res: any) => {
            setData(res.data);
            setIsLoading(false);
        }).catch((error) => {
            setError(error.message);
            setIsLoading(false);
        })
    }, []);
    if (isLoading) {
        return <h2>Is loading</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return <div><>
        <h2>Data Fetching  :</h2>
        {data.map((hero: any) => <div key={hero.id}>{hero.name}</div>)}
    </></div>;
};

export default Test;