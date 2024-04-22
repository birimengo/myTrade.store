import React, { useState, useEffect } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import MicIcon from '@mui/icons-material/Mic';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import avatar from '../assets/profile-add-svgrepo-com.svg';
import SendIcon from '@mui/icons-material/Send';
import './Chat.css';
import { useReactMediaRecorder } from "react-media-recorder";
import TopNavbar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import { Hidden } from '@mui/material';

const Chat = () => {
    const [isVoiceMode, setIsVoiceMode] = useState(false);
    const [isMicIcon, setIsMicIcon] = useState(true);
    const [eqIconColor, setEqIconColor] = useState('blue');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isIconsVisible, setIsIconsVisible] = useState(true);
    const colors = ['green', 'orange'];

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setEqIconColor(prevColor => {
                const currentIndex = colors.indexOf(prevColor);
                const nextIndex = (currentIndex + 1) % colors.length;
                return colors[nextIndex];
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const toggleInputMode = () => {
        setIsVoiceMode(prevMode => !prevMode);
        setIsMicIcon(prevIcon => !prevIcon);
        setIsIconsVisible(true);
    };

    const handleAttachFile = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        event.target.value = null;
        setIsIconsVisible(false);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setIsIconsVisible(true);
    };

    const handleSend = () => {
        // Logic for sending message...
        setSelectedFile(null);
        setIsIconsVisible(true);
        setIsMicIcon(true);
        setIsVoiceMode(false);
    };

    const handleMicOffClick = () => {
        toggleInputMode();
        stopRecording(); // Stop recording when MicOffOutlinedIcon is clicked
    };

    return (
        <>
        <TopNavbar />
        <div className='chat-containerx'>
            <div className='avatarx'>
                <img src={avatar} alt='Avatar' className='avatar' />
            </div>
            <div className='messages'>
                <div className='sent-message'>
                    <p>Sender Message</p>
                </div>
                <div className='received-message'>
                    <p>Receiver Message</p>
                </div>
            </div>
            <div className='message-input'>
                {selectedFile ? (
                    <div className='selected-file'>
                        <p>{selectedFile.name}</p>
                        <button onClick={handleRemoveFile} className='remove-file'>Remove</button>
                    </div>
                ) : (
                    <input type='text' className='input-text' placeholder='Type your message...' style={{ display: isVoiceMode ? 'none' : 'block' }} />
                )}
                <GraphicEqOutlinedIcon style={{ color: eqIconColor, display: isVoiceMode && !isMicIcon ? 'block' : 'none' }} />
                <span style={{ display: isVoiceMode && !isMicIcon ? 'block' : 'none' }}>{status}</span>
                <span style={{ display: isVoiceMode && !isMicIcon && status === 'recording' ? 'block' : 'none' }}></span>
                <textarea placeholder='Speak your message...' style={{ display: isVoiceMode && isMicIcon ? 'block' : 'none' }} />
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleAttachFile} />
                <AttachFileIcon className='icon attach-file-icon' onClick={() => document.getElementById('fileInput').click()} style={{ display: isIconsVisible ? 'inline-block' : 'none' }} />
                <CameraEnhanceIcon className='icon camera-icon' onClick={() => document.getElementById('cameraInput').click()} style={{ display: isIconsVisible ? 'inline-block' : 'none' }} />
                <input type="file" id="cameraInput" accept="image/*" capture="camera" style={{ display: 'none' }} onChange={handleAttachFile} />
                {isMicIcon ? (
                    <MicIcon className='icon mic-icon' onClick={() => { toggleInputMode(); startRecording(); }} style={{ display: isIconsVisible ? 'inline-block' : 'none' }} />
                ) : (
                    <MicOffOutlinedIcon className='icon mic-icon2' onClick={handleMicOffClick} />
                )}
               <Hidden smUp>
  <SendIcon className='send-icon' onClick={handleSend} />
</Hidden>

                <Hidden smDown>
                    <button className='send-buttonx' onClick={handleSend}>Send</button>
                </Hidden>
            </div>
        </div>
    <BottomNavBar />
    </>
    );
};

export default Chat;
