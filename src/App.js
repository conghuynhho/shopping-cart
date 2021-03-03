import "./App.css";
import Shelf from "./components/shelf/";
import Cart from "./components/cart/";
import Filter from "./components/shelf/filter/";
import ClearFix from './components/UI/clearfix/'
function App() {
  return (
    <div className="App">
      <div className="filter-container">
        <div className="title-group">
          <i class="fas fa-filter"></i>
          <h4>Bộ lọc tìm kiếm</h4>
        </div>
        <Filter />
      </div>
      <Shelf />
      <ClearFix/>
      <Cart />
    </div>
  );
}

export default App;
