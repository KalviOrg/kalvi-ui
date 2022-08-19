// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useStore } from 'src/services/store'
import { useEffect, useState } from 'react'
import router from 'next/router'
  
const MAX_FETCH_RETRIES = 60; // max retries to fetch from provider when expecting a change
const FETCH_RETRY_TIMEOUT = 1000; // timeout between fetches when expecting a change

const DisplayCourses = () => {
    const {
        state: { contract },
      } = useStore();

    const [courses, setCourses] = useState([]);
    const [completedCourses, setCompletedCourses] = useState([]);

    const fetchCourses = async (retry = false, retries = 0) => {
        const newCourses = await contract.fetchCourses();
        const completedCourses = await contract.fetchCompletedCourses();
        console.log("Fetch Courses Call.....");
        if (
          retry &&
          retries < MAX_FETCH_RETRIES &&
          courses.length === newCourses.length
        ) {
          return setTimeout(
            () => fetchCourses(true, retries + 1),
            FETCH_RETRY_TIMEOUT
          );
        }
        console.log("Init load courses");
        setCourses(newCourses);
        setCompletedCourses(completedCourses);
      };
    
      //To fetch courses onload
      useEffect(() => {
        if (!contract) {
          return;
        }
    
        fetchCourses();
      }, [contract]);

      function openURL() {
        window.open("https://testnets.opensea.io/collection/nftport-xyz-v2?search[query]=BountyzMilestoneNFT&amp;search[sortAscending]=true&amp;search[sortBy]=PRICE", "_blank");
      }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
            <Typography variant='h5'>Available Courses</Typography>
        </Grid>
        {courses.map((incompleteCourse) => ((incompleteCourse[0] != 0) &&
        <Grid item xs={12} md={3}>
            <Card>
                <CardMedia sx={{ height: '6.375rem' }} >
                    <iframe width="300" height="100" src={incompleteCourse[4].replace("watch?v=","embed/")} />
                </CardMedia>
                <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                    <Typography variant='h6' sx={{ marginBottom: 2 }}>
                    {incompleteCourse[1]}
                    </Typography>
                    <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Rating readOnly value={5} name='read-only' sx={{ marginRight: 2 }} />
                        <Typography variant='body2'>5 Star | 98 reviews</Typography>
                    </Box>
                    <Typography sx={{ marginBottom: 2 }}>${incompleteCourse[5]}</Typography>
                    <Typography variant='body2'>
                    {incompleteCourse[2]}
                    </Typography>
                </CardContent>
                <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }} 
                onClick={() => router.push({
                  pathname: '/course',
                  query: { courseID: incompleteCourse[0], 
                            courseName: incompleteCourse[1], 
                            courseURL: incompleteCourse[4], 
                            courseBounty: incompleteCourse[5]}}, '/course')}>
                    Begin
                </Button>
            </Card>
        </Grid>
        ))}
        <Grid item xs={12} sx={{ paddingTop: 5 }}>
            <Divider
                textAlign='left'
                sx={{
                m: 0,
                width: '100%',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                '&:before, &:after': { top: 7, transform: 'none' },
                '& .MuiDivider-wrapper': { px: 2.5, fontSize: '0.75rem', letterSpacing: '0.21px' }
                }}
            />
        </Grid>
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
            <Typography variant='h5'>Completed Courses</Typography>
        </Grid>
        {completedCourses.map((completeCourse) => ((completeCourse[0] != 0) &&
        <Grid item xs={12} md={3}>
            <Card>
                <CardMedia sx={{ height: '6.375rem' }} >
                    <iframe width="300" height="100" src={completeCourse[4].replace("watch?v=","embed/")} />
                </CardMedia>
                <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                    <Typography variant='h6' sx={{ marginBottom: 2 }}>
                    {completeCourse[1]}
                    </Typography>
                    <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Rating readOnly value={5} name='read-only' sx={{ marginRight: 2 }} />
                        <Typography variant='body2'>5 Star | 98 reviews</Typography>
                    </Box>
                    <Typography sx={{ marginBottom: 2 }}>${completeCourse[5]}</Typography>
                    <Typography variant='body2'>
                    {completeCourse[2]}
                    </Typography>
                </CardContent>
                <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }} 
                onClick={openURL}>
                    View NFT
                </Button>
            </Card>
        </Grid>
        ))}
        
      </Grid>
    </ApexChartWrapper>
  )
}

export default DisplayCourses
