import styled from 'styled-components';

export const Title = styled.h2`
    display: block;
    margin: 0;
    font-size: 21px;
    font-weight: ${props => props.theme.typography.fontWeightMedium};
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    color: ${props => getColor(props.color, props.theme)};
`;

export const BodyText = styled.div`
    display: block;
    margin: 0;
    font-size: 14px;
    font-weight: ${props => props.theme.typography.fontWeightRegular};
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    color: ${props => getColor(props.color, props.theme)};
`;

function getColor(colorProp = 'default', theme) {
    switch (colorProp) {
        case 'default':
            return undefined;
        case 'inherit':
            return 'inherit';
        case 'primary':
            return theme.palette.primary.main;
        case 'secondary':
            return theme.palette.secondary.main;
        case 'textSecondary':
            return theme.palette.text.secondary;
        case 'error':
            return theme.palette.error.main;
    }
}
