import Home from "./pages/Home";
import "./globalStyle.css";
import ProductContextProvider from "./contexts/ProductContextProvider";
function App() {
  return (
    <ProductContextProvider>
      <div className="bg-light">
        <Home />
      </div>
    </ProductContextProvider>
  );
}

export default App;
