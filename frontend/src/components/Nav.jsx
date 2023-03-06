import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/newnote'}>New Note</Link></li>
          <li><Link to={'/allnotes'}>All Notes</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav