import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };

    updateCount(); // Cập nhật lần đầu khi component mount

    // Lắng nghe sự kiện "cartChange"
    window.addEventListener("cartChange", updateCount);

    return () => window.removeEventListener("cartChange", updateCount);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">🍔 FoodieHub</div>
        <Link to="/home" className="navbar-link">🏠 Trang chủ</Link>
        <Link to="/restaurants" className="navbar-link">🏪 Nhà hàng</Link>
        <Link to="/categories" className="navbar-link">📂 Danh mục</Link>
        <Link to="/cart" className="navbar-link">🛒 Giỏ hàng ({count})</Link>
        <Link to="/orders" className="navbar-link">📋 Đơn hàng</Link>
        <Link to="/profile" className="navbar-link">👤 Tài khoản</Link>
      </div>
      <button
        onClick={logout}
        className="btn btn-danger navbar-logout"
      >
        🚪 Đăng xuất
      </button>
    </nav>
  );
}
