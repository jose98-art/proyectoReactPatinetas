import CartWidget from './CartWidget'
import logo from '../logo2.svg'
import Link from './Link';
const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='content-img'>
        <Link to={''}><img src={logo}/></Link>
      
        
      </div>
    <div className='list-menu'>
      <ul>
          <li><Link to='/page/1'><i class="fa-solid iconNav fa-person-skating"></i></Link></li>
          <li><Link to='/page/2'><i class="fa-solid iconNav fa-shield"></i></Link></li>
          <li><Link to='/page/3'><i class="fa-solid iconNav fa-shirt"></i></Link></li>
          <li><Link to='/page/4'><i class="fa-solid iconNav fa-shoe-prints"></i></Link></li>
          
      </ul>
    </div>
    <Link to='/cart'><CartWidget/></Link>
    </div>
  )
}

export default Navbar
