import { useQuery } from 'react-query';
import axios from 'axios';
const fetchData = () => {
    return axios.get('http://localhost:4000/superheroes');
};
const fetchDataById = (heroId: any) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useHookSuperHeroes = (onSuccess: any, onError: any) => {
    return useQuery<any, Error>(
        'super-heroes',
        fetchData,
        // { cacheTime: 5000 }
        // { staleTime: 30000 }
        {
            onSuccess: onSuccess,
            onError: onError,
            enabled: false,
        }
    );
};
export const useHookCustom2 = (
    onSuccess: any,
    onError: any,
    callBack: any,
    uniqueKey: any
) => {
    return useQuery<any, Error>(uniqueKey, callBack, {
        enabled: false,
        onSuccess: (res) => {
            console.log('useHookCustom2-success');
            // do something
        },
        onError: (err: any) => {
            console.log('useHookCustom2-fail');
        },
    });
};
export const useHookCustomById = (
    onSuccess: any,
    onError: any,
    id: any,
    callback: any,
    uniqueKey: any
) => {
    return useQuery<any, Error>(
        [uniqueKey, id],
        async () => {
            return await callback(id);
        },
        {
            onSuccess: onSuccess,
            onError: onError,
            // enabled: false,
        }
    );
};


// you can call something like that
// const fetchSuperHero = ({ queryKey }) => {
//     const heroId = querykey[1]
// return axios.get(`http://localhost:4000/superheroes/${heroId}`)
// }
// export const useSuperHeroData = (heroId) => {
// return useQuery(['super-hero', heroId], fetchSuperHero)
// }