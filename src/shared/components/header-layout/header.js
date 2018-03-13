import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppBar, IconButton, Title, Toolbar } from 'shared/components';
import { CartButton, DepartmentsButton, HomeButton } from './nav-buttons';
import LightbulbOutline from '../icons/light-bulb-outline';

const HeaderTitle = styled(Title)`
    flex: 1;
    font-size: 18px;
`;

@inject('rootStore')
export class Header extends React.Component {
    static propTypes = {
        NavButton: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        NavButton: HomeButton,
        title: 'MobX Shop'
    };

    render() {
        const { NavButton, title } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <NavButton />

                    <HeaderTitle color="inherit">{title}</HeaderTitle>

                    <DepartmentsButton />
                    <CartButton />

                    <IconButton
                        color="inherit"
                        onClick={this.handleToggleTheme}
                    >
                        <LightbulbOutline />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }

    handleToggleTheme = () => {
        const { rootStore: { appStore } } = this.props;
        appStore.toggleTheme();
    };
}
