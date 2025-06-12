import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// ساخت کلاینت به‌صورت امن از طریق Environment Variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
      .from('registrations')
      .insert([body])

    if (error) {
      console.error('خطا در ثبت اطلاعات:', error.message)
      return NextResponse.json({ message: 'خطا در ذخیره‌سازی اطلاعات ❌' }, { status: 500 })
    }

    return NextResponse.json({ message: 'اطلاعات با موفقیت ذخیره شد ✅' }, { status: 200 })
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.error('مشکل در سرور:', err.message)
    return NextResponse.json({ message: 'خطای سرور در پردازش اطلاعات ❌' }, { status: 500 })
  }
}
