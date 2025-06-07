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
    "خیاط",
    "رنگرز",
    "نخ فروش",
    "تولید کننده نخ",
    "طراح",
    "آموزشگاه خیاطی",
    "فروشگاه آنلاین",
    "دیگر",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
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
        type="text"
        name="full_name"
        value={formData.full_name}
        onChange={handleChange}
        placeholder="نام کامل"
        className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ایمیل"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="شماره موبایل"
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
        value={formData.city}
        onChange={handleChange}
        placeholder="شهر / استان"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="توضیح کوتاه درباره شما (اختیاری)"
        className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
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
