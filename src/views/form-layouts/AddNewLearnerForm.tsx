// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface IProps {
  onClose: () => void;
  onAdd: () => void;
}

const AddNewLearnerForm: React.FC<IProps> = ({ onClose, onAdd }) => {

  return (
    <Card>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label='Name' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Wallet Address' />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} label="Allow USDC Withdrawal" />
                </FormGroup>
                <Button type='submit' variant='contained' size='large'>
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddNewLearnerForm
