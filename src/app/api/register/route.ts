import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { data, error } = await supabase
      .from('registrations')
      .insert([body])

    if (error) throw error

    return NextResponse.json({ message: 'اطلاعات با موفقیت ذخیره شد ✅' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'خطا در ذخیره‌سازی اطلاعات ❌', error }, { status: 500 })
  }
}
