import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function SeasonDetail() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto' aria-label="basic tabs example">
            <Tab label="Week One" {...a11yProps(0)} />
            <Tab label="Week Two" {...a11yProps(1)} />
            <Tab label="Week Three" {...a11yProps(2)} />
            <Tab label="Week Four" {...a11yProps(3)} />
            <Tab label="Week Five" {...a11yProps(4)} />
            <Tab label="Week Six" {...a11yProps(5)} />
            <Tab label="Week Seven" {...a11yProps(6)} />
            <Tab label="Week Eight" {...a11yProps(7)} />
            <Tab label="Week Nine" {...a11yProps(8)} />
            <Tab label="Week Ten" {...a11yProps(9)} />
            <Tab label="Week Eleven" {...a11yProps(10)} />
            <Tab label="Week Twelve" {...a11yProps(11)} />
            <Tab label="Week Thirteen" {...a11yProps(12)} />
            <Tab label="Week Fourteen" {...a11yProps(13)} />
            <Tab label="Week Fifteen" {...a11yProps(14)} />
            <Tab label="Week Sixteen" {...a11yProps(15)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    );
  }