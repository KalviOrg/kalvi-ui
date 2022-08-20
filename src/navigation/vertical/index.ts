// ** Icon imports
/*import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'*/
import HomeOutline from 'mdi-material-ui/HomeOutline'
/*import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'*/

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { UserType } from "../../services/store";


const navigation = ( userType: number ): VerticalNavItemsType => {

  switch (userType) {
    case UserType.SPONSOR:
      return [
        {
          sectionTitle: 'Dashboard'
        },
        {
          title: 'Account Details',
          icon: HomeOutline,
          path: '/sponsorDashboard'
        },
        {
          sectionTitle: 'Pages'
        },
        {
          title: 'Leaderboard',
          icon: HomeOutline,
          path: '/leaderboard'
        },
        {
          title: 'Learners',
          icon: HomeOutline,
          path: '/sponsorLearner'
        },
        {
          title: 'Courses',
          icon: HomeOutline,
          path: '/sponsorCourses'
        }
      ]
    case UserType.LEARNER:
      return [
        {
          sectionTitle: 'Dashboard'
        },
        {
          title: 'Account Details',
          icon: HomeOutline,
          path: '/learnerDashboard'
        },
        {
          sectionTitle: 'Pages'
        },
        {
          title: 'Leaderboard',
          icon: HomeOutline,
          path: '/leaderboard'
        },
        {
          title: 'Courses',
          icon: HomeOutline,
          path: '/learnerCourses'
        }
      ]
    default:
      return [
        {
          title: 'Unenrolled',
          icon: HomeOutline,
          path: '/learnerDashboard'
        }
      ]
  }
}

export default navigation
