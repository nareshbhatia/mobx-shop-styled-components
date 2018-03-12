import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
// import DevTools from 'mobx-react-devtools';
import styled from 'styled-components';
import {
    CheckoutPage,
    DepartmentPage,
    HomePage,
    ItemPage,
    ItemListPage,
    NotFoundPage,
    ProfilePage,
    ShoppingCart,
    SigninPage
} from 'features';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const viewMap = {
    checkout: <CheckoutPage />,
    department: <DepartmentPage />,
    home: <HomePage />,
    item: <ItemPage />,
    items: <ItemListPage />,
    notFound: <NotFoundPage />,
    profile: <ProfilePage />,
    shoppingCart: <ShoppingCart />,
    signin: <SigninPage />
};

@inject('rootStore')
export class Shell extends React.Component {
    render() {
        const { rootStore: { routerStore } } = this.props;

        return (
            <Container>
                <RouterView routerStore={routerStore} viewMap={viewMap} />
                {/* <DevTools position={{top: 46, left: 25}} /> */}
            </Container>
        );
    }
}
