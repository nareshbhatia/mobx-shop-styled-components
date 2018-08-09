import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import {
    BackButton,
    BusyIndicator,
    HeaderLayout,
    ItemInfo,
    ItemOrder,
    ItemPhoto,
    ScrollingContent
} from 'shared/components';

const Item = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${props => props.theme.spacing.unit * 2}px;
`;

@inject('rootStore')
@observer
export class ItemPage extends React.Component {
    render() {
        const { rootStore } = this.props;
        const { isLoading, selectedItem: item } = rootStore.itemStore;

        return (
            <HeaderLayout NavButton={BackButton}>
                <ScrollingContent>
                    {isLoading ? (
                        <BusyIndicator />
                    ) : (
                        <Item>
                            <ItemPhoto photo={item.photo} />
                            <ItemInfo item={item} />
                            <ItemOrder rootStore={rootStore} item={item} />
                        </Item>
                    )}
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
