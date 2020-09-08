import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 
  search: {
    position: 'relative',
    borderBottom:"1px solid #dddddd",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-2),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width:"100%",
    padding: 10,
    borderBottom:"1px solid #dddddd"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
   
  }
}));

function SearchInput() {
  const classes = useStyles();

    return (
        <div className="serch">
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
              <div className="NotificationsIcon" style={{float:"right",margin:"6px 80px -45px 0px" }}>
              <Avatar alt="Remy Sharp"src="/static/images/avatar/1.jpg" />
              </div>
              <NotificationsIcon  style={{float:"right", margin:"12px 40px -42px 0"}}   />
            <InputBase
              placeholder="Search artists, Songs, videos..."
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              inputProps={{ 'aria-label': 'search' }}
            />
              
          </div>
        </div>
    )
}

export default SearchInput
