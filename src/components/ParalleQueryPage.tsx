import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
const fetchDataHeros = () => {
    return axios.get('http://localhost:4000/superheroes');
};
const fetchDataFriends = (heroId: any) => {
    return axios.get('http://localhost:4000/friends');
};
const ParalleQueryPage = () => {
    const { data: superHeroList } = useQuery('super-heroes', fetchDataHeros);
    const { data: friendsList } = useQuery('friends-list', fetchDataFriends);
    return (
        <div>ParalleQueryPage</div>
    )
}

export default ParalleQueryPage;