import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotoContainer = styled.div`
    width: 120px;
`;

const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

export function ItemPhoto({ photo }) {
    return (
        <PhotoContainer>
            <Img src={photo} />
        </PhotoContainer>
    );
}

ItemPhoto.propTypes = {
    photo: PropTypes.string.isRequired
};
