import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '40px 20px',
      marginTop: '50px',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)',
      textAlign: 'center',
      color: '#666'
    }}>
      <div className="container">
        <h3 style={{ color: '#ff6b6b', marginBottom: '20px' }}>🍔 FoodieHub</h3>
        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>Đặt món ăn ngon từ nhà hàng yêu thích của bạn</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Liên hệ</h4>
            <p>📧 support@foodiehub.com</p>
            <p>📞 1800-XXXX</p>
          </div>
          <div>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Theo dõi chúng tôi</h4>
            <p>📘 Facebook | 🐦 Twitter | 📷 Instagram</p>
          </div>
          <div>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Dịch vụ</h4>
            <p>🚚 Giao hàng nhanh</p>
            <p>💳 Thanh toán an toàn</p>
          </div>
        </div>
        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>&copy; 2024 FoodieHub. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}