// import React from 'react';
// import { capitalize } from '../utils/helpers';
import styled from 'styled-components';

// export const styles = theme => ({
//   colorPrimary: {
//     color: theme.palette.primary.main,
//   },
//   colorSecondary: {
//     color: theme.palette.secondary.main,
//   },
//   colorAction: {
//     color: theme.palette.action.active,
//   },
//   colorDisabled: {
//     color: theme.palette.action.disabled,
//   },
//   colorError: {
//     color: theme.palette.error.main,
//   },
//   fontSize: {
//     width: '1em',
//     height: '1em',
//   },
// });
//
// SvgIcon.defaultProps = {
//   color: 'inherit',
//   fontSize: false,
//   viewBox: '0 0 24 24',
// };

export const SvgIcon = styled.svg`
    display: inline-block;
    fill: currentColor;
    height: 24px;
    width: 24px;
    user-select: none;
    flex-shrink: 0;
    transition: ${props => props.theme.transitions.create('fill', {
        duration: props.theme.transitions.duration.shorter
    })};
`;
