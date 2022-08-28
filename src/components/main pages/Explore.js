import React from 'react';
import ExploreHeader from '../shared/ExploreHeader';
import styled from  'styled-components'

const Explore = () => {
    const Div = styled.div`
    padding-top:10px;
    width: calc(100% - 6rem);
    margin: auto;
    @media (min-width:992px){
        padding-top: 65px;
    }
    @media(min-width:1200px){
        width: calc(100% - 28rem);
        margin:auto;
    }
    
    `
    return (
        <Div className="">
            <ExploreHeader />
            <div className="mt-2">
                explore
            </div>
        </Div>
    );
};

export default Explore;