import { BrowserRouter } from 'react-router-dom'
import useGetDomain from './utils/helper.router';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App: React.FC = () => {

  const { FinalModal } = useGetDomain();
  console.log(import.meta.env.REACT_APP_GOOGLE_CLIENT_ID)

  return (
    <GoogleOAuthProvider clientId={"1064893821946-deduli3s8v254eunic9dpvkqckkec9um.apps.googleusercontent.com"}>
      <BrowserRouter>
        <FinalModal />
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
