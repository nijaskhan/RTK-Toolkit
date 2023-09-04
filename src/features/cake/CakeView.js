import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
    const cakeCount = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <span style={{ fontWeight: 'lighter', color: 'grey' }}>Buy one cake and get an icecream free</span>
                <h1>Number of Cakes - {cakeCount}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <button
                    style={{ marginRight: '3px' }}
                    onClick={() => dispatch(ordered())}
                >Order cake</button>
                <button
                    onClick={()=> dispatch(restocked(5))}
                >Restock cake</button>
            </div>
        </>
    );
};

export default CakeView;