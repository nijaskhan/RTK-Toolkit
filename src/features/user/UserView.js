import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserView = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h1>List of Users: </h1>
            {
                users.loading ? <div>Loading...</div> : ''
            }
            {
                !users.loading && users.error ? <div>{users.error}</div> : ''
            }
            {
                !users.loading && users.users.length > 0 ? users.users.map((user) =>
                (
                    <ul key={user.id}>
                        <li>{user.name}</li>
                    </ul>
                )
                ) : null
            }
        </>
    );
};

export default UserView;
