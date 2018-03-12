import styled from 'styled-components';
import { fade } from '../../theme/styles/colorManipulator';

export const StyledButton = styled.button`
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
    &::-moz-focus-inner: {
        border-style: none; // Remove Firefox dotted outline.
    };
    line-height: 1.4em; // Improve readability for multiline button.
    box-sizing: border-box;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    min-width: ${props => props.theme.spacing.unit * 11}px;
    min-height: 36px;
    padding: ${props => props.theme.spacing.unit}px ${props => props.theme.spacing.unit * 2}px;
    border-radius: 2px;
    color: ${props => getColor(props.color)};
    transition: ${props => props.theme.transitions.create(
        ['background-color', 'box-shadow'],
        {
            duration: props.theme.transitions.duration.short
        }
    )};
    &:hover {
        text-decoration: none;
        // Reset on mouse devices
        background-color: ${props => fade(props.theme.palette.text.primary, 0.12)};
        @media (hover: none): {
            background-color: transparent
        },
        &$disabled: {
            background-color: transparent
        }
    }
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
