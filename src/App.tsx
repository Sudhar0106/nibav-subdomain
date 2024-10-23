import { BrowserRouter } from "react-router-dom";
import useGetDomain from "./utils/helper.router";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App: React.FC = () => {
  const { FinalModal, main } = useGetDomain();
  console.log(main);

  return (
    <GoogleOAuthProvider
      clientId={
        "1064893821946-deduli3s8v254eunic9dpvkqckkec9um.apps.googleusercontent.com"
      }
    >
      <BrowserRouter>
        <FinalModal />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
