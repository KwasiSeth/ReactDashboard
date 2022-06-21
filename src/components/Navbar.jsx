import React,{useState} from 'react'
import { AppBar,styled,Toolbar, Typography,Box, InputBase, Avatar,Badge,Menu,MenuItem } from '@mui/material'
import {Pets,Mail,Notifications} from '@mui/icons-material'




const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})

const UserBox = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
    }));

const Search = styled("div")(({theme}) => ({
    backgroundColor :'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius
}))

const Icons = styled(Box)(({theme}) => ({
    display:'none',
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))
const Navbar = () => {
    const [open,setOpen] =useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>REAct Dashboard</Typography>
                <Pets sx={{display:{xs:'block',sm:'none'}}}/>
                <Search><InputBase placeholder="Search" /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail   />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photo/846741/pexels-photo-846741.jpeg?auto=compress&css"
                     onClick={e=>setOpen(true)}/>
                    
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                    <Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photo/846741/pexels-photo-846741.jpeg?auto=compress&css"/>
                    <Typography variant="span">John</Typography>
                </UserBox>
                </StyledToolbar>
                <Menu 
                id="demo-positioned-menu" 
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }} >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My Account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </AppBar>
    )
}

export default Navbar