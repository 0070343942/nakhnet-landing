"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    role: "",
    city: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const roles = [
    "پارچه فروش",
    "تزیینات کار",
    "گل‌ساز",
    "واردکننده",
    "صادرکننده",
    "تولیدی پوشاک",
    "خیاط ",
    "رنگرز ",
    "نخ فروش ",
    "تولید کننده نخ ",    
    "طراح ",
    "آموزشگاه خیاطی",
    "فروشگاه آنلاین",
    "دیگر ",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setMessage("اطلاعات با موفقیت ثبت شد.");
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      role: "",
      city: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <input
        name="full_name"
        type="text"
        placeholder="نام کامل"
        value={formData.full_name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="ایمیل"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="phone"
        type="tel"
        placeholder="شماره موبایل"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">انتخاب نقش</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <input
        name="city"
        type="text"
        placeholder="شهر / استان"
        value={formData.city}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="توضیح کوتاه درباره شما (اختیاری)"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        rows={3}
      />
      <button
        type="submit"
        className="bg-green-600 text-white p-2 rounded w-full"
      >
        ثبت‌نام
      </button>
      {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
    </form>
  );
}
