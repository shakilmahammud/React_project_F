import React, { useContext } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { userContext } from '../../App';

const Header = () => {
    const [loggedIn,setLoggedIn]=useContext(userContext);
    return (
        <div className='header'>
            <div className="header_left">
                <div className="header_input">
                    <SearchIcon/>
                <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>


            <div className="header_middle">
                <div className="header_option header_option--active">
                   <div className='MuiSvgIcon'> 
                   <HomeIcon fontSize="large"/>
                   </div>
                </div>
                <div className="header_option">
                <div> 
                 <FlagIcon fontSize="large"/>
                 </div>
                   
                </div>
                <div className="header_option">
                <div> 
                <SubscriptionsOutlinedIcon fontSize="large"/>
                 </div>   
                </div>
                <div className="header_option">
                <div > 
                <StorefrontOutlinedIcon fontSize="large"/>
                 </div>
                </div>
                <div className="header_option">
                <div> 
                <SupervisedUserCircleIcon fontSize="large"/>
                 </div>   
                </div>

            </div>

            <div className="header_right">
                <div className="header_info">
                  {loggedIn ?
                  ( 
                  <>
                    <Avatar/>
                    <h4>{loggedIn.name}</h4>
                  </>)
                  :
                    (
                     <>
                       <Avatar/>
                    <h4>SHAKIL MAHAMMUD</h4>
                      </>
                        )
                    
                  }
                </div>
                <IconButton>
                <AddIcon fontSize="large"/>
                </IconButton>
                <IconButton>
                <ForumIcon fontSize="large"/>
                </IconButton>
                <IconButton>
                <NotificationsActiveIcon fontSize="large"/>
                </IconButton>
                <IconButton>
                <ExpandMoreIcon fontSize="large"/>
                </IconButton>
            </div>
        </div>
    );
};

export default Header;