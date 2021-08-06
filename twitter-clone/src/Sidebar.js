import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter'
import Twitter from '@material-ui/icons/Twitter';
import './sidebar.css';
import SidebarOption  from './SidebarOption';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@material-ui/core";
function Sidebar() {
    return (
        <div className = "sidebar">
            <TwitterIcon className = "sidebar__twitterIcon"/>
            <SidebarOption Icon = {HomeIcon} text = "Home"/>
            <SidebarOption Icon = {SearchIcon}text = "Explore"/>
            <SidebarOption Icon = {NotificationsNoneIcon}text = "Notifications"/>
            <SidebarOption Icon = {MailOutlineIcon}text = "Mail"/>
            <SidebarOption Icon = {BookmarkBorderIcon}text = "Bookmarks"/>
            <SidebarOption Icon = {ListAltIcon}text = "Lists"/>
            <SidebarOption Icon = {PermIdentityIcon}text = "Profile"/>
            <SidebarOption Icon = {MoreHorizonIcon}text = "More"/>

            <Button variant="outlined" className = "sidebar__tweet" fullWidth>Tweet</Button>






            
        </div>
    )
}

export default Sidebar
