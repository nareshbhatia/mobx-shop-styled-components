import styled from 'styled-components';

export const AppBar = styled.header`
    position: static;
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.contrastText};
    box-shadow: ${props => props.theme.shadows[4]};
`;
