import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Trophy from '../assets/1.png';
import Award from '../assets/2.png';
import Machines from '../assets/3.png';

const Content = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', marginTop: '100px' }}>
        <img src={Trophy} alt="Image of a trophy" style={{ width: '30%', height: 'auto', objectFit: 'cover' }} />
        <Box sx={{ padding: 3, marginLeft: 'auto' }}>
          <Stack spacing={2}>
            <Typography color='black' variant='' sx={{ fontSize: '1rem' }}>
             <strong> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
            </Typography>
            <Typography color='black' sx={{ fontSize: '1rem' }}>
              <li>
                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
              </li>
            </Typography>
          </Stack>
          <img src={Award} alt="Award" style={{ width: '80%', height: 'auto', marginTop: '20px' }} />
        </Box>
      </Box>
      <Typography color='black' sx={{ padding: '0 20px', marginTop: '40px' }}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
      </Typography>
      <img src={Machines} alt="Various Machinaries" style={{ width: '100%', marginTop: '20px' }} />
      <Typography color='black' sx={{ padding: '0 20px', marginTop: '40px', textAlign:'center' }}>
      Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
      </Typography>
      <hr color='red'/>
      <Typography variant='h6' color='black' sx={{ padding: '0 20px', marginTop: '40px', textAlign:'center' }}>
      C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </Typography>
      <Typography color='black' sx={{ textAlign: 'center', padding: '0 20px', marginTop: '20px' }}>
        CHEMICALS & PROCESS <span style={{ color: 'red' }}>|</span> POWER WATER & WASTE WATER <span style={{ color: 'red' }}>|</span> OILS & GAS <span style={{ color: 'red' }}>|</span> PHARMA <span style={{ color: 'red' }}>|</span> SUGARS & DISTILLERIES <span style={{ color: 'red' }}>|</span> PAPER & PULP <span style={{ color: 'red' }}>|</span> MARINE & DEFENCE <span style={{ color: 'red' }}>|</span> METAL & MINING <span style={{ color: 'red' }}>|</span> FOOD & BEVERAGE <span style={{ color: 'red' }}>|</span> PETROCHEMICAL & REFINERIES <span style={{ color: 'red' }}>|</span> SOLAR <span style={{ color: 'red' }}>|</span> BUILDING <span style={{ color: 'red' }}>|</span> HVAC <span style={{ color: 'red' }}>|</span> FIRE FIGHTING <span style={{ color: 'red' }}>|</span> AGRICULTURE & RESIDENTIAL
      </Typography>
    </Box>
  );
};

export default Content;
