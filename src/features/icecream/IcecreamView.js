import React from 'react';
import { useSelector } from 'react-redux';

const IcecreamView = () => {
    const icecreamCount = useSelector((state) => state.icecream.numOfIcecream);
    return (
        <>
            <div>
                <h1>Number of Ice-Creams - {icecreamCount}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <button style={{marginRight: '3px'}}>Order Ice-cream</button>
                <button>Restock Ice-cream</button>
            </div>
        </>
    );
};

export default IcecreamView;
