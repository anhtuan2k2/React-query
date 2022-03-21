import { useQuery } from 'react-query';
import axios from 'axios';
import TutorialService from '../services/TutorialService';
const fetchData = () => {
    return axios.get("http://localhost:4000/superheroes")
}



export const useHookSuperHeroes = (onSuccess: any, onError: any) => {
    return useQuery<any, Error>("super-heroes", fetchData,
        // { cacheTime: 5000 }
        // { staleTime: 30000 }
        {
            onSuccess: onSuccess,
            onError: onError,
            enabled: false
        }
    );
};
export const useHookCustom2 = (onSuccess: any, onError: any, callBack: any, uniqueKey: any) => {
    return useQuery<any, Error>(uniqueKey, callBack,
        {
            enabled: false,
            onSuccess: (res) => {
                console.log("useHookCustom2-success")
                // do something 
            },
            onError: (err: any) => {
                console.log("useHookCustom2-fail")
            },
        }
    );
};