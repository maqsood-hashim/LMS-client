import { Divider, Typography, Button } from '@material-ui/core';

import React from 'react';
import Styles from './NoticeToggleRow.module.css'
import im1 from '../../../../assets/images/BaggageHandling.jpg'

import im2 from '../../../../assets/images/ControllingTower.png'
import im3 from '../../../../assets/images/fueling.jpg'
import im4 from '../../../../assets/images/Runaway.jpg'
import im5 from '../../../../assets/images/Runaway2.jpg'


const NoticeToggleRow = ({ Icon, title, description, link, download }) => {
    const images = [
        im1,
        im2,
       im3,
       im4,
       im5
      ];
    return (
        <>

            <div className={Styles.NoticeToggleRow}>
            
                <div className={Styles.title__style}>
                

                    <Icon className="mr-2" style={{ color: "#CD5C5C" }} />
                    {
                        download &&
                        <Typography variant='subtitle1'>

                            <a
                                href={download}
                                download="Example-PDF-document"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Download resource Link </a></Typography>
                    }
                    {link &&
                        <Typography variant='subtitle1'>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={Styles.link__style}
                            >
                                View external resource
                            </a>
                        </Typography>
                    }
                    {!link &&  !download &&<Typography variant='subtitle1'>
                        {title}
                    </Typography>}

                </div>
                <Typography className="ml-4" color='textSecondary' variant="subtitle1">
                    {description}
                </Typography>

            </div>

        </>
    );
};

export default NoticeToggleRow;