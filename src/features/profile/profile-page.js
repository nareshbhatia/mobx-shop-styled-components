import React from 'react';
import { inject } from 'mobx-react';
import { HeaderLayout, ScrollingContent } from 'shared/components';

@inject('rootStore')
export class ProfilePage extends React.Component {
    render() {
        // const { rootStore: { authStore } } = this.props;
        // const { user: { email } } = authStore;

        return (
            <HeaderLayout>
                <ScrollingContent>
                    {/*<Typography variant="headline">{email}</Typography>*/}
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
