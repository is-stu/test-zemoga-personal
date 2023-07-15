import { Route } from 'wouter'
import { AddPerson, Home, PastTrials } from './Views/index'
import { CustomNavbar } from './components/Navbar/CustomNavbar'

export const App = () => {
  return (
    <div>
      <CustomNavbar />
      <Route path='/' component={Home} />
      <Route path='/pastTrials' component={PastTrials} />
      <Route path='/addPerson' component={AddPerson} />
    </div>
  )
}
