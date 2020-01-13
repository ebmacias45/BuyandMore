import React from 'react';
import Layaout from './Layaout.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';

export default function Header (){
    return(
      
        
         <AppBar >
          <Toolbar>
    
           <Typography variant="h4">
             BuyAndMore
           </Typography>
           <div className="navButtons">
             <Button>Sign in</Button> 
             <Button>Sign up</Button>
             <Button>About</Button>
           </div>
          </Toolbar>
        </AppBar>
     
    )
}
