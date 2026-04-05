import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(cart);
  }, [navigate]);

  const removeItem = (foodId) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const next = cart.filter(item => item.foodId !== foodId);
    localStorage.setItem("cart", JSON.stringify(next));
    setItems(next);
    window.dispatchEvent(new Event("cartChange"));
  };

  const placeOrder = () => {
    if (!items.length) {
      alert("Giỏ hàng trống");
      return;
    }
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const nextOrder = {
      id: orders.length + 1,
      items,
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: "pending",
      createdAt: new Date().toLocaleString()
    };
    localStorage.setItem("orders", JSON.stringify([...orders, nextOrder]));
    localStorage.removeItem("cart");
    setItems([]);
    window.dispatchEvent(new Event("cartChange"));
    alert("Đặt hàng thành công!");
    navigate("/orders");
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2 style={{ color: 'white', fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px' }}>🛒 Giỏ hàng của bạn</h2>
      {items.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Giỏ hàng của bạn đang trống. Hãy thêm món ăn ngon nào!</p>
          <button onClick={() => navigate('/home')} className="btn" style={{ marginTop: '20px' }}>Quay lại trang chủ</button>
        </div>
      ) : (
        <>
          <div className="grid" style={{ marginBottom: '30px' }}>
            {items.map(item => (
              <div key={item.foodId} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', padding: '20px' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '10px' }}>{item.name}</div>
                  <div style={{ color: '#666', marginBottom: '5px' }}>Số lượng: {item.quantity}</div>
                  <div className="price">₫{item.price?.toLocaleString()}</div>
                </div>
                <button onClick={() => removeItem(item.foodId)} className="btn btn-danger">
                  Xóa
                </button>
              </div>
            ))}
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: '#4caf50' }}>Tổng cộng: ₫{total?.toLocaleString()}</div>
            <button onClick={placeOrder} className="btn" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
              Đặt hàng ngay
            </button>
          </div>
        </>
      )}
    </div>
  );
}
