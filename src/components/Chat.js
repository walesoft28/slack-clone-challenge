import React from 'react'
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import styled from 'styled-components';

function chat() {
    return (
        <Container>
            <ChatHeader />
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

export default chat

const Container = styled.div`
    // background: rgba(0, 0, 0, 0.86);
    display: grid;
    grid-template-rows: 74px auto min-content
`
const MessageContainer = styled.div``
