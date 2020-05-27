import './navbar.scss'
import Dict from '../../model/Dict'
import SideBar from './SideBar'

const Navbar = (props) => {


  return (
    <>
          <SideBar active={props.active}/>
    </>
  )
}

export default Navbar
