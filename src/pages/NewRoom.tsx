import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Link } from 'react-router-dom'

import { Button } from '../components/Button'

import '../styles/auth.scss'

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="question and answer illustration" />
        <strong>Create Live Q&amp;A rooms</strong>
        <p>Clear your doubts out in real time.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask logo" />
          <h2>Create new room</h2>
          <form>
            <input
              type="text"
              placeholder="room's name"
            />
            <Button type="submit">
              Create
            </Button>
          </form>
          <p>
            Go to an existing room?<Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}