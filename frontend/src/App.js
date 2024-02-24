import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./pages/components/AppRoute";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Sidebar />
                <AppRoute />
            </div>
        </BrowserRouter>
    );
}

export default App;
