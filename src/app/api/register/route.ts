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

    if (error) {
      console.error('Supabase insert error:', error.message)
      return NextResponse.json({ message: 'خطا در ذخیره‌سازی اطلاعات ❌' }, { status: 500 })
    }

    return NextResponse.json({ message: 'اطلاعات با موفقیت ذخیره شد ✅' }, { status: 200 })
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'خطای ناشناخته'
    console.error('Server error:', errorMessage)
    return NextResponse.json({ message: 'خطای سرور در پردازش اطلاعات ❌' }, { status: 500 })
  }
}
