import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BodyText } from 'shared/components';
import { CurrencyUtils } from 'shared/utils';

const InfoContainer = styled.div`
    padding: ${props => props.theme.spacing.unit}px;
    margin-left: ${props => props.theme.spacing.unit * 4}px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ItemName = styled.div`
    font-size: 18px;
    color: ${props => props.theme.palette.primary[500]};
`;

const ItemPrice = BodyText.extend`
    margin-top: ${props => props.theme.spacing.unit * 2}px;
`;

export function ItemInfo({ item }) {
    return (
        <InfoContainer>
            <ItemName>{item.name}</ItemName>
            <BodyText>by {item.manufacturer}</BodyText>
            <ItemPrice>
                {CurrencyUtils.toString(item.price, 'USD')}
            </ItemPrice>
        </InfoContainer>
    );
}

ItemInfo.propTypes = {
    item: PropTypes.object.isRequired
};
