import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/categories");
        setCategories(res.data || []);
      } catch (err) {
        console.error(err);
        alert("Lỗi tải danh mục");
      }
    };
    fetch();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Danh mục</h2>
      {categories.length === 0 ? (
        <p>Chưa có danh mục nào.</p>
      ) : (
        <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
          {categories.map(cat => (
            <div key={cat.id || cat.name} style={{ padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
              <div style={{ fontWeight: 700 }}>{cat.name}</div>
              {cat.description && <div>{cat.description}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
