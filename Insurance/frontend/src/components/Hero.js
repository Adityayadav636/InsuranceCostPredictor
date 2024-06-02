import React from 'react';
import AOS from 'aos';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';

import HeroButtons from '../components/HeroButtons';

const Hero = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

    React.useEffect(() => {
        AOS.init({
            once: true,
            delay: 50,
            duration: 600,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <Box
            maxWidth={{ sm: 720, md: 1236 }}
            width={1}
            margin='0 auto'
            paddingTop={10}
            backgroundColor={theme.palette.background.default}
        >
            <Grid container spacing={4} marginTop='20px'>
                <Grid item xs={12} md={6}>
                    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                        <Box marginBottom={2}>
                            <Typography
                                variant='h1'
                                color={theme.palette.text.primary}
                                align='center'
                                marginTop='30px'
                            >
                                Fill the Family Detail
                            </Typography>
                        </Box>
                        <Box marginBottom={3}>
                            <Typography
                                variant='h4'
                                color={theme.palette.text.secondary}
                                align='center'
                                paddingTop={3}
                                paddingBottom={3}
                                marginBottom='15px'
                            >
                                Website will tell Insurance Cost of Family
                            </Typography>
                        </Box>
                        <HeroButtons />
                    </Box>
                </Grid>
                <Grid 
                    item 
                    container 
                    alignItems='flex-start' 
                    justifyContent='flex-start' 
                    xs={12} 
                    md={6}
                >
                    <Box
                        sx={{
                            height: { xs: 'auto', md: 1 },
                            maxWidth: '100%',
                            '& img': {
                                objectFit: 'cover',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                width: '100%',
                                height: '100%'
                            },
                            '& .lazy-load-image-loaded': {
                                height: 1,
                                width: 1
                            }
                        }}
                    >
                        <img src='https://miro.medium.com/v2/resize:fit:1400/0*ssbGU5VIxtVB6NrF' alt='Family Insurance'></img>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
