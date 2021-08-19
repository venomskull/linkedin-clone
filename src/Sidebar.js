import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';


function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MXwxMjA3fDB
                8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2030&q=80" alt=""/>
                <Avatar src={user.photoURL} className="sidebar_avatar" >{user.email[0]}</Avatar>
                {/* {user.email && (
                    <Avatar src={user.photoURL} className="sidebar_avatar" >{user.email[0]}</Avatar>
                )}  */}
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who viewed your profile </p>
                    <p className="sidebar__statNumber">2,500</p>
                </div>
                <div className="sidebar__stat">
                <p> Views on post </p>
                <p className="sidebar__statNumber">2,000</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>

        </div>
    )
}

export default Sidebar
