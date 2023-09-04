import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

const IcecreamView = () => {
    const icecreamCount = useSelector((state) => state.icecream.numOfIcecream);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h1>Number of Ice-Creams - {icecreamCount}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <button
                    style={{ marginRight: '3px' }}
                    onClick={() => dispatch(ordered())}
                >Order Ice-cream</button>
                <button
                    onClick={() => dispatch(restocked(10))}
                >Restock Ice-cream</button>
            </div>
        </>
    );
};

export default IcecreamView;
