import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';

function Orders() {
    return (
      <div className="orders-container">
        <StepsHeader />
        <ProductList />
      </div>
    )
}

export default Orders;