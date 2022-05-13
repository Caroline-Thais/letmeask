import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'

import '../styles/auth.scss'

export function Home() {
  let navigate = useNavigate();
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
          <button className="create-room" onClick={() => { navigate("/rooms/new") }}>
            <img src={googleIconImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div className="separator">or access a room</div>
          <form>
            <input
              type="text"
              placeholder="Type room id"
            />
            <Button type="submit">
              Go
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}