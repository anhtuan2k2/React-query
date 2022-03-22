import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {
    useHookSuperHeroes,
    useHookCustom2,
} from '../hooks/useHookSuperHeroes';
import TutorialService from '../services/TutorialService';

const RQSuperHeroes = () => {

    const onSuccess = (data: any) => {
        console.log('getListHeroes success', data);
    };
    const onError = (error: any) => {
        console.log('getListHeroes error', error);
    };
    const fetchDataTutorial = async () => {
        return await TutorialService.findAll();
    };

    const { isLoading, data, error, isError, isFetching, refetch } =
        useHookSuperHeroes(onSuccess, onError);
    const {
        isLoading: isLoading2,
        data: data2,
        error: error2,
        isError: isError2,
        isFetching: isFetching2,
        refetch: refetch2,
    } = useHookCustom2(onSuccess, onError, fetchDataTutorial, 'Tutorial');
    console.log({ isFetching, isLoading });
    if (isLoading) {
        return <h2>Is loadinssssg</h2>;
    }
    if (isError) {
        return <h2>{error?.message}</h2>;
    }
    return (
        <div>
            <div>screen for react-query</div>
            <button onClick={() => refetch()}> call by useQuery- List Hero</button>
            <button onClick={() => refetch2()}> call by useQuery - Tutorial</button>
            {data?.data.map((hero: any) => (
                <div key={hero.id} className="hero-link--name" >
                    <Link to={`/re-superHeroes/${hero.id}`}> {hero.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default RQSuperHeroes;

// for default call api and don't use custom hooks
// const { isLoading, data, error, isError, isFetching, refetch } = useQuery<any, Error>("super-heroes", fetchData,
//     // { cacheTime: 5000 }
//     // { staleTime: 30000 }
//     {
//         onSuccess: onSuccess,
//         onError: onError,
//         // enabled: false
//     }
// );
