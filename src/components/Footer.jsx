import React from 'react';
import { Box, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';

const Footer = () => {
  return (
    <Box
      bgcolor="red"
      px="40px"
      py="24px"
      mt="24px"
      textAlign="center"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body1" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
        <PhoneSharpIcon sx={{ marginRight: '5px' }} /> Toll free: <strong>1800 200 1234</strong>
      </Typography>
        
      <Typography variant="body1" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
        <FacebookRoundedIcon sx={{ marginRight: '5px' }} /> <a href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>www.facebook.com/cripumps</a>
      </Typography>

      <Typography variant="body1" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
        <LanguageRoundedIcon sx={{ marginRight: '5px' }} /> <a href="https://www.crigroups.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>www.crigroups.com</a>
      </Typography>
    </Box>
  );
};

export default Footer;
