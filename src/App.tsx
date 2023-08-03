import React, { useState } from 'react';


import logo from './assets/logo.png';
import hero from './assets/hero.png';

import tab1 from './assets/tab-1.png';
import tab2 from './assets/tab-2.png';
import tab3 from './assets/tab-3.png';


import chrome from './assets/logo-chrome.png';
import firefox from './assets/logo-firefox.png';
import opera from './assets/logo-opera.png';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@mui/material';
import TabComponent from './components/Tab';

function App() {

  const isNonMobileScreen576 = useMediaQuery("(min-width:576px)");
  const isNonMobileScreen767 = useMediaQuery("(min-width:767px)");
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event);

    setValue(newValue);
  };


  return (
    <div>
      <div className="header">
        <div className="container flex-between">
          <div className="header__logo">

            <img src={logo} className='header__img' alt="" />
          </div>
          {isNonMobileScreen576 ? <div className="header__texts flex-between">
            <div className="header__text">FEATURES</div>
            <div className="header__text">PRICING</div>
            <div className="header__text">CONTACT</div>
            <div className="header__button">LOGIN</div>
          </div> : <div className=''>menu</div>}

        </div>
      </div>

      {/* ----- */}

      <div className="hero">
        <div className="container ">
          <div className="hero__info">
            <h1 className="hero__title">
              A Simple Bookmark Manager
            </h1>
            <p className='hero__text'>A clean and simple interface to organize your favourite<br /> websites. Open a new
              browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className='hero__button-container flex'>
              <div className='hero__button-blue'>Get it on Chrome</div>
              <div className='hero__button-gray'>Get it on Firefox</div>
            </div>
          </div>
          <div className='hero__img-container'>

            <img className='hero__img' src={hero} alt="" />
          </div>


        </div>
      </div>

      <div className="feat">
        <div className="container text-center">
          <h1 className="feat__title">
            Features
          </h1>
          <p className="feat__text">
            Our aim is to make it quick and easy for you to access your favourite websites.
            Your bookmarks sync between your devices so you can access them on the go.

          </p>


          <Box className='feat__tabs' sx={{ width: '100%' }}>
            <TabContext value={value}>
              <Box className='feat__tabs-nums' mb={7} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} sx={{}} aria-label="lab API tabs example">
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                  <Tab label="Item Three" value="3" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <TabComponent img={tab1} title='Bookmark in one click' text='Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.
' />
              </TabPanel>
              <TabPanel value="2">
                <TabComponent title='Intelligent search' img={tab2} text='Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.
' />
              </TabPanel>
              <TabPanel value="3">
                <TabComponent title='Share your bookmarks' img={tab3} text='Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.' />
              </TabPanel>
            </TabContext>
          </Box>


        </div>
      </div>



      <div className="down">
        <div className="container text-center">
          <h2 className="down__title text-center">Download the extension</h2>
          <p className="down__text text-center">We’ve got more browsers in the pipeline. Please do let us know if<br /> you’ve
            got a favourite you’d like us to prioritize.

          </p>
          <div className="down__boxs ">
            <div className="down__box box-1 text-center"  >
              <img className="down__box-img" src={chrome} />
              <h3 className="down__box-title"> Add to Chrome</h3>
              <p className="down__box-text">Minimum version 62</p>
              <div className="down__box-button">Add & Install Extension</div>
            </div>

            <div className="down__box box-1 text-center"  >
              <img className="down__box-img" src={firefox} />
              <h3 className="down__box-title"> Add to Firefox</h3>
              <p className="down__box-text">Minimum version 55</p>
              <div className="down__box-button">Add & Install Extension</div>
            </div>

            <div className="down__box box-1 text-center"  >
              <img className="down__box-img" src={opera} />
              <h3 className="down__box-title"> Add to Opera</h3>
              <p className="down__box-text">Minimum version 46</p>
              <div className="down__box-button">Add & Install Extension</div>
            </div>
          </div>
        </div>
      </div>


      <div className="faq">
        <div className="container flex-center text-center">
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__text">Here are some of our FAQs.<br /> If you have any other questions you’d like
            answered please feel free to email us.
          </p>
          <Box className='faq__accordion' sx={{ width: isNonMobileScreen767 ? '70%' : '100%' }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h5 style={{ margin: 0 }}>What is Bookmark?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.

                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h5 style={{ margin: 0 }}>What is Bookmark?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.

                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h5 style={{ margin: 0 }}>What is Bookmark?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.

                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h5 style={{ margin: 0 }}>What is Bookmark?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.

                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h5 style={{ margin: 0 }}>What is Bookmark?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.

                </p>
              </AccordionDetails>
            </Accordion>

          </Box>
          <div className="faq__button">More info</div>
        </div>
      </div>



    </div>
  )
}

export default App
