<<<<<<< HEAD
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
=======
"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "",
    city: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setMessage("اطلاعات با موفقیت ثبت شد.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <input
        className="w-full p-2 border rounded mb-4 vazir-font"
        type="text"
        name="name"
        placeholder="نام کامل"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        className="w-full p-2 border rounded mb-4 vazir-font"
        type="email"
        name="email"
        placeholder="ایمیل"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        className="w-full p-2 border rounded mb-4 vazir-font"
        type="text"
        name="mobile"
        placeholder="شماره موبایل"
        value={formData.mobile}
        onChange={handleChange}
      />

      <select
        className="w-full p-2 border rounded mb-4 vazir-font"
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="">انتخاب نقش</option>
        <option value="پارچه‌فروش">پارچه‌فروش</option>
        <option value="مزون‌دار">مزون‌دار</option>
        <option value="خیاط خانگی">خیاط خانگی</option>
        <option value="فروشگاه تزیینات">فروشگاه تزیینات</option>
        <option value="گل‌دوز و کار سنگ‌دوزی">گل‌دوز / کار سنگ‌دوزی</option>
        <option value="آموزشگاه خیاطی">آموزشگاه خیاطی</option>
        <option value="واردکننده/صادرکننده">واردکننده / صادرکننده</option>
        <option value="علاقه‌مند به یادگیری">علاقه‌مند به یادگیری</option>
      </select>

      <input
        className="w-full p-2 border rounded mb-4 vazir-font"
        type="text"
        name="city"
        placeholder="شهر / استان"
        value={formData.city}
        onChange={handleChange}
      />

      <textarea
        className="w-full p-2 border rounded mb-4 vazir-font"
        name="description"
        placeholder="توضیح کوتاه درباره شما (اختیاری)"
        rows={3}
        value={formData.description}
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        ثبت‌نام
      </button>

      {message && (
        <p className="text-green-600 mt-4 text-center vazir-font">{message}</p>
      )}
    </form>
  );
}
>>>>>>> bd49b5b3e1e31c9c61ecf6507ada83268f2217de
