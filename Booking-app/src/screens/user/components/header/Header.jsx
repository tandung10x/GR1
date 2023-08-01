import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from "@mui/material";
import { useLogout, useAuth } from "../../../../app/auths";

export default function Header({ type }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { logout, isLoading } = useLogout();
    const { user, authLoading } = useAuth();

    console.log(user);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='header'>
            <div className={`${type === "search" ? "container header-has-search" : "container"}`}>
                <div className="header-top">
                    <h2><Link to='/'>Homestays system</Link></h2>
                </div>
                <div className="header-user">
                    <h4
                        style={{ cursor: 'pointer' }}
                        aria-controls={open ? 'basic-menu' : undefined}
                        onClick={handleClick}
                    >
                        {user.username}
                    </h4>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >   
                        <MenuItem>
                            <Link to={`/user-trips`} style={{ textDecoration: 'none', color: 'black' }}>My profile</Link>
                        </MenuItem>          
                        <MenuItem onClick={logout} isLoading={isLoading}>Logout</MenuItem>
                    </Menu>
                </div>
                {type === "search" && <>
                    <div className="header-center">
                        <p>We give you a lovely welcome, everytime you come back</p>
                    </div>                
                </>}                
            </div>
        </div>
    )
}
