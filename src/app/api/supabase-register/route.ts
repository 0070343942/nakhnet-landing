import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { data, error } = await supabase.from('registration').insert([{
      name: body.name,
      email: body.email,
      mobile: body.mobile,
      role: body.role,
      city: body.city,
      description: body.description || null,
    }])

    if (error) throw error

    return NextResponse.json({ message: 'اطلاعات با موفقیت ذخیره شد ✅' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'خطا در ذخیره‌سازی اطلاعات ❌', error }, { status: 500 })
  }
}