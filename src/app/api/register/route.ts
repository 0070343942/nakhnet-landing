import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { data, error } = await supabase.from('registrations').insert([
      {
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        role: body.role,
        city: body.city,
        description: body.description,
      },
    ])

    if (error) {
      console.error('🔥 Supabase Insert Error:', error)
      throw error
    }

    console.log('✅ Supabase Insert Success:', data)

    return NextResponse.json({ message: 'اطلاعات با موفقیت ذخیره شد ✅' }, { status: 200 })

  } catch (error: unknown) {
    console.error('🔥 Supabase Catch Error:', error)
    if (error instanceof Error) {
      return NextResponse.json({ message: 'خطای غیرمنتظره در ذخیره‌سازی ❌', error: error.message }, { status: 500 })
    }
    return NextResponse.json({ message: 'خطای غیرمنتظره در ذخیره‌سازی ❌', error: String(error) }, { status: 500 })
  }
}