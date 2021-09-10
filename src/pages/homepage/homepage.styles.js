import styled from 'styled-components';

export const HomePageContainer = styled.div`
min-height: 78vh;
position: relative;
background-color: colors.$darkgrey;

@media screen and (min-width: media-sizes.$xxlarge) {
    .homepage {
        display: flex;
        justify-content: space-around;
        
    }
}
`