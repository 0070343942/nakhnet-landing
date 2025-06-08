
'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    location: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('اطلاعات ثبت شد ✅');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
      <input type="text" name="name" placeholder="نام کامل" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
      <input type="email" name="email" placeholder="ایمیل" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />
      <input type="tel" name="phone" placeholder="شماره موبایل" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" required />
      <select name="role" value={form.role} onChange={handleChange} className="w-full border p-2 rounded" required>
        <option value="">انتخاب نقش</option>
        <option>تولیدکننده پارچه</option>
        <option>فروشگاه آنلاین پارچه</option>
        <option>فروشنده تزئینات</option>
        <option>کار گل‌ساز</option>
        <option>واردکننده</option>
        <option>صادرکننده</option>
      </select>
      <input type="text" name="location" placeholder="شهر / استان" value={form.location} onChange={handleChange} className="w-full border p-2 rounded" />
      <textarea name="description" placeholder="توضیح کوتاه درباره شما (اختیاری)" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" rows={3} />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">ثبت‌نام</button>
    </form>
  );
}
