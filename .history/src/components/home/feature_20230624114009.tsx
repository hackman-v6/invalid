import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
// import CircularProgress from '@mui/material/CircularProgress'
// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'

// interface LinearProgressProps {
//   order: number
// }

// const BorderLinearProgress = styled(LinearProgress, {
//   shouldForwardProp: (prop) => prop !== 'color',
// })<LinearProgressProps>(({ theme, order }) => ({
//   height: 6,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[200],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     ...(order === 1 && {
//       backgroundColor: '#f303ff',
//     }),
//     ...(order === 2 && {
//       backgroundColor: '#26e8bd',
//     }),
//     ...(order === 3 && {
//       backgroundColor: '#0063ff',
//     }),
//   },
// }))

const HomeFeature: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' , top: 150 , right: 100}}>
              <Image src="/images/news-image.webp" width={950} height={478} quality={100} alt="Feature img"  />
              {/* <Box
                sx={{
                  position: 'absolute',
                  top: -36,
                  right: { xs: 0, md: -36 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  width: 190,
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Lorem ipsum dolor
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    UI/UI Design
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={65} order={1} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Mobile Development
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={40} order={2} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Web Development
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={50} order={3} />
                </Box>
              </Box> */}

              {/* <Box
                sx={{
                  position: 'absolute',
                  bottom: -12,
                  left: { xs: 0, md: -24 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 2,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                > */}
                  {/* <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>Lorem ipsum</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.disabled' }}>
                    Lorem ipsum
                  </Typography>
                  <Box
                    sx={{
                      height: 85,
                      width: 85,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#32dc88' }}>
                      75%
                    </Typography>
                    <CircularProgress
                      sx={{ position: 'absolute', color: 'divider' }}
                      thickness={2}
                      variant="determinate"
                      value={85}
                      size={85}
                    />
                    <CircularProgress
                      disableShrink
                      thickness={2}
                      variant="determinate"
                      value={75}
                      size={85}
                      sx={{ transform: 'rotate(96deg) !important', color: '#32dc88', position: 'absolute' }}
                    />
                  </Box> */}
                {/* </Box>
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
             
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
               About Us <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
              
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
            At GreenWave, we are dedicated to providing assistance to vulnerable communities affected by climatic and ecosystem changes. Through our crowd funding platform, we connect compassionate individuals with projects that address the challenges posed by these shifts. Our focus extends beyond immediate relief efforts, emphasizing sustainable practices, ecosystem restoration, and community empowerment. Join us in fostering resilience, restoring balance, and creating a sustainable future for all.
            </Typography>

            <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 1,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature
