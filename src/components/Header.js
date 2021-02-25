import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import styled from 'styled-components';

function header(props) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon onclick={props.toggle}/>
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Abdulsamad Usman
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default header

const Container = styled.div`
    // background: rgb(0, 0, 0);
    background: #350D36;
    color: #fff;
    display: flex;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
`

const Main = styled.div`
    margin: 0 16px;
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin: 0 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
    border-radius: 6px;

    input {
        width: 100%;
        border-radius: inherit;
        background-color: transparent;
        border: none;
        color: #fff;
        padding: 4px 8px;
    }

    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
    margin: 3px 0;

    img {
        width: 100%;
    }
`