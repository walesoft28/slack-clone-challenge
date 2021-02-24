import React from 'react'
import ChatHeader from './ChatHeader';
import styled from 'styled-components';

function chat() {
    return (
        <Container>
            <ChatHeader />
        </Container>
    )
}

export default chat

const Container = styled.div`
    background: rgba(0, 0, 0, 0.86);
`
