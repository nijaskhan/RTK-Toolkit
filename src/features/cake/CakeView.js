import React from 'react';
import { useSelector } from 'react-redux';

const CakeView = () => {
    const cakeCount = useSelector((state) => state.cake.numOfCakes);
    return (
        <>
            <div>
                <h1>Number of Cakes - {cakeCount}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <button style={{marginRight: '3px'}}>Order cake</button>
                <button>Restock cake</button>
            </div>
        </>
    );
};

export default CakeView;