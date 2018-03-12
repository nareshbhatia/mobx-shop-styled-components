import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ItemInfo } from './item-info';
import { ItemPhoto } from './item-photo';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${props => props.theme.palette.divider};
    padding: ${props => props.theme.spacing.unit * 2}px;
    cursor: pointer;
`;

@observer
export class Item extends React.Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        itemClicked: PropTypes.func.isRequired
    };

    render() {
        const { item } = this.props;

        return (
            <ItemContainer key={item.id} onClick={this.handleClick}>
                <ItemPhoto photo={item.photo} />
                <ItemInfo item={item} />
            </ItemContainer>
        );
    }

    handleClick = () => {
        const { item, itemClicked } = this.props;
        itemClicked(item.id);
    };
}
