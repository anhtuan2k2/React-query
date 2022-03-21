import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {
    useHookSuperHeroes,
    useHookCustom2,
} from '../hooks/useHookSuperHeroes';
import TutorialService from '../services/TutorialService';

const RQSuperhero = () => {
    const fortmatResponse = (res: any) => {
        return JSON.stringify(res, null, 2);
    };
    const fetchData = () => {
        return axios.get('http://localhost:4000/superheroes');
    };
    const onSuccess = (data: any) => {
        console.log('something success', data);
    };
    const onError = (error: any) => {
        console.log('something error', error);
    };
    const fetchData2 = async () => {
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
    } = useHookCustom2(onSuccess, onError, fetchData2, 'something-Key');
    console.log({ isFetching, isLoading });
    if (isLoading) {
        return <h2>Is loadinssssg</h2>;
    }
    if (isError) {
        return <h2>{error?.message}</h2>;
    }
    return (
        <div>
            <div>screen for react-query- DETAILS</div>

        </div>
    );
};

export default RQSuperhero;
