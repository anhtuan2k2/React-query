import React, { useEffect } from 'react';
import { useQueries, useQuery } from 'react-query';
import axios from 'axios';


const fetchDataHeros = (heroIds: any) => {
    return axios.get(`http://localhost:4000/superheroes/${heroIds}`);
};
const DynamicQueriesPage = ({ heroIds }: any) => {

    const queryResults = useQueries(
        heroIds.map((id: any) => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchDataHeros(id),
            };
        })
    );
    useEffect(() => {
        console.log('queryResults', queryResults);
    }, [queryResults]);
    return <div>ParalleQueryPage</div>;
};

export default DynamicQueriesPage;
