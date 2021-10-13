import "./App.css";
import Balance from "./components/Balance";
import ExpenseContainer from "./components/ExpenseContainer";
import ExpenseForm from "./components/ExpenseForm";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <ExpenseForm />
        <Balance />
        <ExpenseContainer />
      </div>
    </GlobalProvider>
  );
}

export default App;
