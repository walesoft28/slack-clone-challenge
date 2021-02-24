import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import styled from 'styled-components';

function ChatHeader() {
    return (
        <Container>
            <Main>
                <Channel>
                    <ChannelName>
                        # clever
                    </ChannelName>
                    <StarBorderIcon style={{ color: "white"}}/>
                </Channel>
                <Tag>
                    Company wide announcements and work based matters
                </Tag>
            </Main>
            <Details>
                <Name>
                    Details
                </Name>
                <InfoIcon />
            </Details>
        </Container>
    )
}

export default ChatHeader


const Container = styled.div`
    width: 100%;
    height: 74px;
    box-shadow: 0px 1px 3px 0 rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Main = styled.div`
    padding-left: 20px;
`
const Channel = styled.div`
    display: flex;
    align-items: center;
`
const ChannelName = styled.div`
    padding-right: 3px;
    font-size: 20px;
    font-weight: bold; 
    color: #fff; 
    fill: #fff;
`
const Tag = styled.div`
    font-size: 13px;
    color: rgb(188, 171, 188);
`

const Details = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;
    cursor: pointer;
    color: #fff;
`
const Name = styled.div`
    padding-right: 6px;
`