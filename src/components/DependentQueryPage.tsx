import React, { useEffect } from 'react';
import { useQueries, useQuery } from 'react-query';
import axios from 'axios';
const fetchUserByEmail = (email: any) => {
    return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchChannelByEmail = (channelId: any) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
};
const DependentQueryPage = ({ email }: any) => {
    const { data: userData } = useQuery(
        ['user', email], () => fetchUserByEmail(email)
    );
    const channelId = userData?.data.channelId;
    useQuery(
        ['courses', channelId], () => fetchChannelByEmail(channelId), {
        enabled: !!channelId
    }
    );
    useEffect(() => {
        console.log("userData", userData);
    }, [userData]);
    return <div>ParalleQueryPage</div>;
};

export default DependentQueryPage;
