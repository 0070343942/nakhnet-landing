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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      setMessage(result.message || "اطلاعات با موفقیت ثبت شد ✅");
    } else {
      setMessage(result.message || "خطا در ارسال اطلاعات ❌");
    }
  } catch (error) {
    setMessage("مشکلی در ارتباط با سرور پیش آمد ❌");
  }
};




    const result = await res.json();

    if (res.ok) {
      setMessage(result.message || "اطلاعات با موفقیت ثبت شد ✅");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        role: "",
        city: "",
        description: "",
      });
    } else {
      setMessage(result.message || "خطا در ارسال اطلاعات ❌");
    }
  } catch (error) {
    setMessage("مشکلی در ارتباط با سرور پیش آمد ❌");
  }
};

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-24">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 space-y-4 border border-gray-300"
      >
        <h2 className="text-xl font-bold text-center lalezar-font">فرم ثبت‌نام نخ‌نت</h2>

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
          <option value="نخ‌فروش">نخ‌فروش</option>
          <option value="آنلاین‌شاپ">آنلاین‌شاپ</option>
          <option value="سایر">سایر</option>
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
