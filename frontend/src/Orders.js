import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(stored);
  }, [navigate]);

  return (
    <div className="container">
      <h2 style={{ color: 'white', fontSize: '2.5rem', textAlign: 'center', margin: '50px 0 30px' }}>📋 Lịch sử đơn hàng</h2>

      {orders.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Bạn chưa có đơn hàng nào trong lịch sử.</p>
          <button onClick={() => navigate('/home')} className="btn" style={{ marginTop: '20px' }}>Khám phá món ăn ngay</button>
        </div>
      ) : (
        <div style={{ display: "grid", gap: '25px', marginBottom: '50px' }}>
          {orders.map(order => (
            <div key={order.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{
                background: '#f8f9fa',
                padding: '15px 25px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#333' }}>Đơn hàng #{order.id}</div>
                  <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '4px' }}>🕒 {order.createdAt}</div>
                </div>
                <span style={{
                  background: order.status === 'pending' ? '#fff3cd' : '#d1e7dd',
                  color: order.status === 'pending' ? '#856404' : '#0f5132',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  {order.status === 'pending' ? '⏳ Đang xử lý' : order.status}
                </span>
              </div>

              <div style={{ padding: '20px 25px' }}>
                <div style={{ marginBottom: '15px' }}>
                  {order.items.map(item => (
                    <div key={item.foodId} style={{ display: "flex", justifyContent: "space-between", marginBottom: '8px' }}>
                      <span style={{ color: '#555' }}>{item.name} <span style={{ color: '#999', fontSize: '0.9rem' }}>x{item.quantity}</span></span>
                      <span style={{ fontWeight: 500 }}>₫{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px dashed #eee', paddingTop: '15px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <span style={{ color: '#666', marginRight: '10px' }}>Tổng thanh toán:</span>
                  <span style={{ color: '#4caf50', fontSize: '1.5rem', fontWeight: 800 }}>₫{order.total?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
