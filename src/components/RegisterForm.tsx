"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    role: "",
    location: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setMessage("اطلاعات با موفقیت ثبت شد.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded shadow-md space-y-4 vazir-font"
    >
      <input
        type="text"
        name="fullName"
        placeholder="نام کامل"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
      />
      <input
        type="email"
        name="email"
        placeholder="ایمیل"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
      />
      <input
        type="tel"
        name="mobile"
        placeholder="شماره موبایل"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-white text-black"
      >
        <option value="">انتخاب نقش</option>
        <option value="store">فروشگاه پارچه</option>
        <option value="decor">خرازی / تزئینات</option>
        <option value="tailor">خیاط / مزون</option>
        <option value="exporter">صادرکننده / واردکننده</option>
      </select>
      <input
        type="text"
        name="location"
        placeholder="شهر / استان"
        value={formData.location}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
      />
      <textarea
        name="description"
        placeholder="توضیح کوتاه درباره شما (اختیاری)"
        value={formData.description}
        onChange={handleChange}
        rows={3}
        className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        ثبت‌نام
      </button>

      {message && (
        <p className="text-center text-green-700 text-sm">{message}</p>
      )}
    </form>
  );
}
