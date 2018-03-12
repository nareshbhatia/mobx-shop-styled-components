import React, { Component } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { observer, Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { RootStore } from 'shared/stores';
import blue from 'shared/theme/colors/blue';
import pink from 'shared/theme/colors/pink';
import red from 'shared/theme/colors/red';
import createMuiTheme from 'shared/theme/styles/createMuiTheme';
import { history } from 'shared/utils';
import { Shell } from './shell';

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

// TODO: Find a solution for changing the theme dynamically.
// This requires changing the body based on the theme. This is not currently possible. See
// https://github.com/styled-components/styled-components/issues/1333
injectGlobal`
    html {
        height: 100%;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        height: 100%;
        margin: 0;
        background: #ffffff;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.87);

        // Helps fonts on OSX look more consistent with other systems
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        // Use momentum-based scrolling on iOS devices
        -webkit-overflow-scrolling: touch;
    }
    
    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`;

@observer
class App extends Component {
    render() {
        const { paletteType } = rootStore.appStore;
        const palette = {
            primary: {
                main: blue[500]
            },
            secondary: {
                main: pink.A400
            },
            error: {
                main: red.A400
            },
            type: paletteType,
            // Initialize background to white (default is #fafafa)
            // This allows pictures with white background to blend in.
            background: {
                default: paletteType === 'light' ? '#ffffff' : '#303030'
            }
        };
        const theme = createMuiTheme({ palette });

        return (
            <ThemeProvider theme={theme}>
                <Provider rootStore={rootStore}>
                    <Shell />
                </Provider>
            </ThemeProvider>
        );
    }
}

export default App;
