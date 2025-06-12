import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { data, error } = await supabase
      .from('registrations')
      .insert([body])

    if (error) {
      console.error('SUPABASE ERROR:', error.message)
      return NextResponse.json(
        { message: 'خطا در ذخیره‌سازی اطلاعات ❌', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'اطلاعات با موفقیت ذخیره شد ✅' }, { status: 200 })
  } catch (err: any) {
    console.error('CATCH ERROR:', err.message)
    return NextResponse.json(
      { message: 'خطای سیستمی ❌', details: err.message },
      { status: 500 }
    )
  }
}
