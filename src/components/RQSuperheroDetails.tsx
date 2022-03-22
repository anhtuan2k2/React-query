import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { useHookCustomById } from '../hooks/useHookSuperHeroes';
import HeroesService from '../services/HeroesService';

const RQSuperheroDetails = () => {
    const { heroId } = useParams();

    const onSuccess = (data: any) => {
        console.log('getDetails success', data);
    };
    const onError = (error: any) => {
        console.log('getDetails error', error);
    };

    const { isLoading, data, error, isError, isFetching } = useHookCustomById(
        onSuccess,
        onError,
        heroId,
        HeroesService.fetchHeroDetailsById,
        'get-DetailsHero'
    );
    console.log({ isFetching, data });
    if (isLoading) {
        return <h2>DETAILS Loading ...</h2>;
    }
    if (isError) {
        return <h2>{error?.message}</h2>;
    }
    return (
        <div>
            <div>screen for react-query- DETAILS</div>
            <div>
                <ul>
                    <li>{data.data.id}</li>
                    <li>{data.data.title}</li>
                    <li>{data.data.name}</li>
                </ul>
            </div>
        </div>
    );
};

export default RQSuperheroDetails;
