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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setMessage("اطلاعات با موفقیت ثبت شد ✅");
  };

  return (
    <div className="w-full flex justify-center px-4">
      <form
  onSubmit={handleSubmit}
  className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 space-y-4 border border-gray-300"
>
  <h2 className="text-xl md:text-2xl font-bold text-center lalezar-font">
  فرم ثبت‌نام نخ‌نت
</h2>

          <input
    name="name"
    placeholder="نام کامل"
    value={formData.name}
    onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 vazir-font"
  />

  <input
    name="email"
    type="email"
    placeholder="ایمیل"
    value={formData.email}
    onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 vazir-font"
  />

  <input
    name="mobile"
    placeholder="شماره موبایل"
    value={formData.mobile}
    onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 vazir-font"
  />


       <select
  name="role"
  value={formData.role}
  onChange={handleChange}
  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 vazir-font bg-white"
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
  <option value="رنگرز">رنگرز</option>
  <option value="طراح">طراح</option>
  <option value="تولیدکننده">تولیدکننده</option>
  <option value="فروشنده نخ">فروشنده نخ</option>
  <option value="آنلاین‌شاپ">آنلاین‌شاپ</option>
</select>

<input
  name="city"
  placeholder="شهر / استان"
  value={formData.city}
  onChange={handleChange}
  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 vazir-font"
/>

<textarea
  name="description"
  placeholder="توضیح کوتاه درباره شما (اختیاری)"
  value={formData.description}
  onChange={handleChange}
  rows={3}
  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 vazir-font"
/>
<button
  type="submit"
  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 vazir-font"
>
  ثبت‌نام
</button>

{message && (
  <p className="text-green-600 text-center mt-4 vazir-font">
    {message}
  </p>
)}
      </form>
    </div>
  );
}
