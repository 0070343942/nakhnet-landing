"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    city: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("اطلاعات ثبت شد ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-4 rounded-lg shadow-md space-y-4">
      <input name="name" onChange={handleChange} placeholder="نام کامل" className="border rounded w-full p-2" />
      <input name="email" onChange={handleChange} placeholder="ایمیل" className="border rounded w-full p-2" />
      <input name="phone" onChange={handleChange} placeholder="شماره موبایل" className="border rounded w-full p-2" />
      <select name="role" onChange={handleChange} className="border rounded w-full p-2">
        <option value="">انتخاب نقش</option>
        <option value="فروشگاه پارچه">فروشگاه پارچه</option>
        <option value="فروش تزئینات">فروش تزئینات</option>
        <option value="صادرکننده">صادرکننده</option>
        <option value="واردکننده">واردکننده</option>
      </select>
      <input name="city" onChange={handleChange} placeholder="شهر / استان" className="border rounded w-full p-2" />
      <textarea name="description" onChange={handleChange} placeholder="توضیح کوتاه درباره شما (اختیاری)" className="border rounded w-full p-2" />
      <button type="submit" className="bg-green-600 text-white py-2 rounded w-full">ثبت‌نام</button>
    </form>
  );
}