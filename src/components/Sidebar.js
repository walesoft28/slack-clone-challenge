import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { SidebarItemsMainData, SidebarItemsChannelData} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    CleverProgrammer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    SidebarItemsMainData.map(item => (
                        <MainChannelItem>
                            { item.icon }
                            { item.text }
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon />
                </NewChannelContainer>
                <ChannelsList>
                {
                    SidebarItemsChannelData.map(item => (
                        <Channel>
                            { item.text }
                        </Channel>
                    ))
                }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.96);
`

const WorkspaceContainer = styled.div`
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 19px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Name = styled.div`

`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background-color: #fff;
    border-radius: 50%;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 19px;
    cursor: pointer;
`
const MainChannels = styled.div`

`

const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #1a141a
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188, 171, 188);
    margin-top: 10px;
`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 19px;
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #1a141a
    }
`