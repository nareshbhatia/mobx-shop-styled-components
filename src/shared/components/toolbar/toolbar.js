import styled from 'styled-components';

export const Toolbar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    min-height: 56px;
    min-height: 64px;
    padding-left: ${props => props.theme.spacing.unit * 1.5}px;
    padding-right: ${props => props.theme.spacing.unit * 1.5}px;
`;
