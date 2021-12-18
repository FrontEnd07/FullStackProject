import { useRouter } from "@hooks/useRoutes";

function App() {

  const routes = useRouter("client");

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
