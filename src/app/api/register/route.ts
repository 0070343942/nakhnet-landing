import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { error } = await supabase
      .from('registrations')
      .insert([body])

    if (error) throw error

    return NextResponse.json({ message: 'اطلاعات با موفقیت ذخیره شد ✅' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'خطا در ذخیره‌سازی اطلاعات ❌', error: String(error) }, { status: 500 })
  }
}
