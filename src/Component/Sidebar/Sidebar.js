import React from 'react'
import './Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fdac23-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/86800413_1095105534173981_3353839626715398144_n.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_eui2=AeGnHwZoMg0lWO4iTR_kkEWD9v_xnJ_zUgX2__Gcn_NSBX12Oqc8PNWQtgaOXkYENhO2pYtHv33A4gSASA6mMNXb&_nc_ohc=2VO8btwxvrIAX8tJmZd&_nc_ht=scontent.fdac23-1.fna&oh=290e18eb65de2d1a45de5d5360163592&oe=5F7EAE1E" title='Shakil Mahammud'/>
            <SidebarRow Icon={LocalHospitalIcon} title="COV-19 Infomation center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="pages"/>
            <SidebarRow  Icon={PeopleIcon} title="Friends"/>
            <SidebarRow  Icon={ChatIcon} title="Messenger"/>
            <SidebarRow  Icon={StorefrontIcon} title="MarketPlace"/>
            <SidebarRow  Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow  Icon={ExpandMoreIcon} title="MarketPlace"/>
            
        </div>
    )
}

export default Sidebar
