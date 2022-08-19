// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { useStore } from 'src/services/store'
import { useEffect, useState } from 'react'

interface RowType {
  age: number
  name: string
  date: string
  email: string
  salary: string
  status: string
  designation: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    age: 27,
    status: 'current',
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Human Resources Assistant'
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'professional',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    designation: 'Nuclear Power Engineer'
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'Minnie Roy',
    status: 'rejected',
    salary: '$18991.67',
    email: 'ediehn6@163.com',
    designation: 'Environmental Specialist'
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'resigned',
    salary: '$19252.12',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    designation: 'Sales Representative'
  },
  {
    age: 66,
    status: 'applied',
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'Annie Martin',
    designation: 'Operator',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'Adeline Day',
    status: 'professional',
    email: 'hnisius4@gnu.org',
    designation: 'Senior Cost Accountant'
  },
  {
    age: 61,
    status: 'current',
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Lora Jackson',
    designation: 'Geologist',
    email: 'ghoneywood5@narod.ru'
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Rodney Sharp',
    status: 'professional',
    designation: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp'
  }
]

const statusObj: StatusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const MAX_FETCH_RETRIES = 60; // max retries to fetch from provider when expecting a change
const FETCH_RETRY_TIMEOUT = 1000; // timeout between fetches when expecting a change

const DashboardTable = () => {
  const {
    state: { contract},
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
    setCourses(newCourses);
    setCompletedCourses(completedCourses);
  };

  const getCourseStatus = async (courseID: number) => {
    return await contract.getCourseStatus(courseID);
  };

  //To fetch courses onload
  useEffect(() => {
    if (!contract) {
      return;
    }

    fetchCourses();
  }, [contract]);

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>URL</TableCell>
              <TableCell>Bounty</TableCell>
              <TableCell>Cert</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((incompleteCourse) => ((incompleteCourse[0] != 0) &&
              <TableRow hover key={incompleteCourse[0]} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{incompleteCourse[0]}</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{incompleteCourse[1]}</Typography>
                    <Typography variant='caption'>{incompleteCourse[2]}</Typography>
                  </Box>
                </TableCell>
                <TableCell><a href={incompleteCourse[4]} rel="noopener noreferrer" target="_blank">Watch</a></TableCell>
                <TableCell>{incompleteCourse[5]}</TableCell>
                <TableCell> -- </TableCell>
                <TableCell>
                  <Chip
                    label="Not Completed"
                    color={statusObj["rejected"].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
            {completedCourses.map((completedCourse) => ((completedCourse[0] != 0) &&
              <TableRow hover key={completedCourse[0]} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{completedCourse[0]}</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{completedCourse[1]}</Typography>
                    <Typography variant='caption'>{completedCourse[2]}</Typography>
                  </Box>
                </TableCell>
                <TableCell><a href={completedCourse[4]} rel="noopener noreferrer" target="_blank">Watch</a></TableCell>
                <TableCell>{completedCourse[5]}</TableCell>
                <TableCell><a href="https://testnets.opensea.io/collection/nftport-xyz-v2?search[query]=BountyzMilestoneNFT&amp;search[sortAscending]=true&amp;search[sortBy]=PRICE" rel="noopener noreferrer" target="_blank">View</a></TableCell>
                <TableCell>
                  <Chip
                    label="Completed"
                    color={statusObj["professional"].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
