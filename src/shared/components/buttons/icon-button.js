import styled from 'styled-components';

export const IconButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // Remove grey highlight
    -webkit-tap-highlight-color: transparent;
    background-color: transparent; // Reset default value
    outline: none;
    border: 0;
    margin: 0; // Remove the margin in Safari
    border-radius: 0;
    padding: 0; // Remove the padding in Firefox
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none; // Reset
    -webkit-appearance: none; // Reset
    text-decoration: none;
    // So we take precedent over the style of a native anchor element.
    color: inherit;
    '&::-moz-focus-inner': {
        border-style: none; // Remove Firefox dotted outline.
    };
    text-align: center;
    flex: 0 0 auto;
    font-size: ${props => props.theme.typography.pxToRem(24)}px;
    width: ${props => props.theme.spacing.unit * 6}px;
    height: ${props => props.theme.spacing.unit * 6}px;
    color: ${props => getColor(props.color)};
    transition: ${props => props.theme.transitions.create('background-color', {
        duration: props.theme.transitions.duration.shortest
    })};
`;

function getColor(colorProp = 'default', theme) {
    switch (colorProp) {
        case 'default':
            return theme.palette.action.active;
        case 'inherit':
            return 'inherit';
        case 'primary':
            return theme.palette.primary.main;
        case 'secondary':
            return theme.palette.secondary.main;
        case 'disabled':
            return theme.palette.action.disabled;
    }
}
