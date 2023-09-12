import * as React from 'react';
import {Typography} from '@mui/material';

export default function SkillBox(props) {

  return (
    <>
        <Typography>
            {props.skillname}
        </Typography>

        <img 
            src={props.url} 
            alt={"logo " + props.skillname}
            width={20}
            height={20}
        />
    </>
  );
}