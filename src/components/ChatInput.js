import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import FormatBoldOutlinedIcon from '@material-ui/icons/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@material-ui/icons/FormatItalicOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import TextFormatOutlinedIcon from '@material-ui/icons/TextFormatOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import styled from 'styled-components';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..." />
                    <SendButton>
                        <Send />
                    </SendButton>
                </form>
                <ChatIcons>
                    <LeftIcons>
                        <FlashOnOutlinedIcon />
                        <FormatBoldOutlinedIcon />
                        <FormatItalicOutlinedIcon />
                        <CodeOutlinedIcon />
                        <LinkOutlinedIcon />
                        <FormatListNumberedOutlinedIcon />
                    </LeftIcons>
                    <RightIcons>
                        <TextFormatOutlinedIcon />
                        <AlternateEmailOutlinedIcon />
                        <SentimentSatisfiedOutlinedIcon />
                        <AttachFileOutlinedIcon />
                    </RightIcons>
                </ChatIcons>
            </InputContainer>
        </Container>   
    )
}

export default ChatInput

const Container = styled.div`
    // background-color: orange;
    padding: 0px 20px 24px 20px;
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;
    
    form {
        display: flex;
        align-items: center;
        padding: 5px 0 5px 10px;
    }

    input {
        flex: 1;
        border: none;
        font-size: 13px;
    }

    input:focus {
        outline: none;
    }
`

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }
`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`

const ChatIcons = styled.div`
    background-color: rgb(242 242 242);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftIcons = styled.div`
    padding: 5px;
    width: 30%;
    display: flex;
    justify-content: space-between;
    color: #605e5e
`

const RightIcons = styled.div`
    padding: 5px;
    width: 25%;
    display: flex;
    justify-content: space-evenly;
    color: #605e5e;
`