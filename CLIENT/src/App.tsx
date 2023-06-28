import { Route, Routes, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Footer } from "./vacationsComponents/Footer";
import Header from "./components/Header";
import { JammersList } from "./pages/jammersList/jammersList";
import JammersTablePage from "./pages/jamersTablePage/JammersPage";
import { Login } from "./pages/Login/Login";
import { Registration } from "./pages/Registration/Registration";

import JamerCard from "./pages/jamerCard/jamerCard";

import { UserContext } from "./UserContext";
import store from "./redux_features/store";
import { Provider } from "react-redux";

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
              <Route path="/jamerCard/:jamerId" element={<JamerCard />} />
            </Routes>
          </main>
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
