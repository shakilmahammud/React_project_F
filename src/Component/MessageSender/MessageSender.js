import React, { useState } from 'react';
import './MessageSender.css';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


const MessageSender = () => {
    const [input, setInput]=useState('');
    const [image, setImage]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setInput('')
        setImage('')
    }
    return (
        <div className="messageSender">
            <div className="message_top">
            <Avatar/>
            <form>
                <input className="message_input" name="" placeholder={`What's on Your Mind`}
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                />
                <input  placeholder="Image URl (Optional)"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
                />
                <button type="submit" onChange={handleSubmit}> Hidden Submit</button>
            </form>
            </div>
            <div className="message_bottom">
                <div className="message_option">
                    <VideocamIcon style={{color:'red'}}/>
                    <h4>Live Video</h4>
                </div>
                <div className="message_option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="message_option">
                    <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h4>Feeling/Activity</h4>
                </div>

            </div>
            
        </div>
    );
};

export default MessageSender;