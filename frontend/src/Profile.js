import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
  }, [navigate]);

  return (
    <div style={{ padding: 24 }}>
      <h2>Thông tin tài khoản</h2>
      {user.email ? (
        <div style={{ marginTop: 20 }}>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Tên:</strong> {user.name || "Chưa có"}</div>
        </div>
      ) : (
        <p>Bạn chưa đăng nhập hoặc thông tin chưa được lưu.</p>
      )}
    </div>
  );
}
