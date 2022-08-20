// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import PlusCircle from 'mdi-material-ui/PlusCircle'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useStore } from 'src/services/store'
import { useEffect, useState } from 'react'
import AddNewCourseForm from 'src/views/form-layouts/AddNewCourseForm'
  
const MAX_FETCH_RETRIES = 60; // max retries to fetch from provider when expecting a change
const FETCH_RETRY_TIMEOUT = 1000; // timeout between fetches when expecting a change

const DisplayCourses = () => {
    const {
        state: { contract },
      } = useStore();

    const [courses, setCourses] = useState([]);
    const [open, setOpen] = useState(false);

    const fetchCourses = async (retry = false, retries = 0) => {
        const newCourses = await contract.fetchCourses();
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
      };
    
      //To fetch courses onload
      useEffect(() => {
        if (!contract) {
          return;
        }
    
        fetchCourses();
      }, [contract]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <ApexChartWrapper>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>Courses</Typography>
            </Grid>
            <Grid item xs={12} sx={{ paddingBottom: 2, paddingTop: 2 }}>
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
            {courses.map((course) => ((course[0] != 0) &&
            <Grid item xs={12} md={3}>
                <Card>
                    <CardMedia sx={{ height: '6.375rem' }} >
                        <iframe style={{width:'100%', height:'100%'}} src={course[4].replace("watch?v=","embed/")} />
                    </CardMedia>
                    <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>
                        {course[1]}
                        </Typography>
                        <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            <Rating readOnly value={5} name='read-only' sx={{ marginRight: 2 }} />
                            <Typography variant='body2'>5 Star | 98 reviews</Typography>
                        </Box>
                        <Typography sx={{ marginBottom: 2 }}>${course[5]}</Typography>
                        <Typography variant='body2'>
                        {course[2]}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
            <Grid item xs={12} md={3}>
                <Card>
                <CardContent
                    sx={{
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '16.625rem',
                    padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
                    }}
                >
                        <Avatar
                            sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
                            >
                            <PlusCircle onClick={handleClickOpen}/>
                        </Avatar>
                        <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
                            Add New Course
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
            <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add New Course</DialogTitle>
                        <DialogContent>
                            <AddNewCourseForm 
                                onClose={() => handleClose}
                                onAdd={() => fetchCourses(true)} />
                        </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
            </Dialog>
        </Grid>
    </ApexChartWrapper>
  )
}

export default DisplayCourses
