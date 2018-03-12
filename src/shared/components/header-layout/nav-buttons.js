import React from 'react';
import Apps from '../icons/apps';
import ArrowBack from '../icons/arrow-back';
import ShoppingCart from '../icons/shopping-cart';
import { inject } from 'mobx-react';
import { RouterState } from 'mobx-state-router';
// import styled from 'styled-components';
import { IconButton, StyledButton } from 'shared/components';
import { history } from 'shared/utils';

/**
 * HomeButton: Navigates to home page
 */
@inject('rootStore')
export class HomeButton extends React.Component {
    render() {
        return (
            <IconButton
                color="inherit"
                onClick={this.handleHomeClicked}
            >
                <Apps />
            </IconButton>
        );
    }

    handleHomeClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(new RouterState('home'));
    };
}

/**
 * BackButton: Goes back
 */
export class BackButton extends React.Component {
    render() {
        return (
            <IconButton
                color="inherit"
                onClick={history.goBack}
            >
                <ArrowBack />
            </IconButton>
        );
    }
}

/**
 * DepartmentsButton: Navigates to Electronics department
 */
@inject('rootStore')
export class DepartmentsButton extends React.Component {
    render() {
        return (
            <StyledButton
                color="inherit"
                onClick={this.handleDepartmentsClicked}
            >
                Departments
            </StyledButton>
        );
    }

    handleDepartmentsClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(new RouterState('department', { id: 'electronics' }));
    };
}

/**
 * CartButton: Navigates to the shopping cart
 */
@inject('rootStore')
export class CartButton extends React.Component {
    render() {
        return (
            <IconButton color="inherit" onClick={this.handleCartClicked}>
                <ShoppingCart />
            </IconButton>
        );
    }

    handleCartClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(new RouterState('shoppingCart'));
    };
}
