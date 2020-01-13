import React from 'react';
import { Grid } from '@material-ui/core';
import './Layaout.css';


export default function Body(){
    return(
        <div>
         <div container className="bodyContainer">

          <Grid className="sidebar" justify="flex-end" xs="4">
                  <h3>testSideeeee</h3>
          </Grid>
          <Grid className="maincontent" justify="flex-end" xs="8">
                  <h2>testMain</h2>
          </Grid>
         </div>
         
       </div>
    )
}
