import { useRouter } from "@hooks/useRoutes";
import { Route, Routes } from "react-router-dom";
import { Client, Admin, Header } from "@view";

function App() {

  const routes = useRouter("client");

  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path='/*' element={<Client />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes >
    </div>
  );
}

export default App;
