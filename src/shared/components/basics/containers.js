import styled from 'styled-components';

/**
 * FullHeightVerticalContainer - parent should be flex-direction: column
 */
export const FullHeightVerticalContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

/**
 * CenteredContainer - parent should be flex-direction: column
 */
export const CenteredContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: ${props => props.theme.spacing.unit}px;
`;

/**
 * ScrollingContent
 */
export const ScrollingContent = styled.div`
    flex: 1;
    overflow: auto;
    padding: ${props => props.theme.spacing.unit}px;
`;
