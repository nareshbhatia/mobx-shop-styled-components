import React from 'react';
import { inject } from 'mobx-react';
import {
    ItemList,
    HeaderLayout,
    ScrollingContent,
    Title
} from 'shared/components';

const ContentTitle = Title.extend`
    padding: 8px 0 0 16px;
    font-weight: normal;
`;

@inject('rootStore')
export class HomePage extends React.Component {
    render() {
        const { rootStore } = this.props;
        return (
            <HeaderLayout>
                <ScrollingContent>
                    <ContentTitle>Featured Items</ContentTitle>
                    <ItemList rootStore={rootStore} />
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
