import { Route, Routes, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import JammersTablePage from "./pages/Jammers_Table_page/jammersTablePage";
import { Login } from "./pages/Login_Page/Login";
import { Registration } from "./pages/Registration_Page/Registration";

import JamerCardPage from "./pages/Jamers_Card_Page/JammerCardPage";

import { UserContext } from "./UserContext";
import store from "./redux_features/store";
import { Provider } from "react-redux";
import Profile from "./pages/User_Profile_Page/userProfilePage"
import { MyJamEvent } from "./pages/My_Jam_Events_Page/myJamEvents";
import { CreateJamEvent } from "./pages/Create_Jam_Event_Page/createJamEvent";
function App() {
  const [value, setValue] = useState<any>("hallo from context");
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={providerValue}>
          <Header />
          <main className="container content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/jammersList" element={<JammersTablePage />} />
              <Route path="/jamerCard/:jamerId" element={<JamerCardPage />} />

              <Route path="/profile/:jamerId" element={<Profile />} />
              <Route path="/create-jam-event/:jamerId" element={<CreateJamEvent />} />
              <Route path="/my-jam-events/:jamerId" element={<MyJamEvent />} />
              {/* <Route path="/my-jam-events/:jamerId" element={<Background3d />} /> */}

            </Routes>
          </main>
          <Footer />

        </UserContext.Provider>
      </Provider>

    </>
  );
}

export default App;
