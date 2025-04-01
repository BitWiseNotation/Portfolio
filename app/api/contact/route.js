// app/api/contact/route.js

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  const body = await req.json();
  const { firstname, lastname, email, phone, service, message } = body;

  const { error } = await supabase
    .from('contact_messages')
    .insert([{ firstname, lastname, email, phone, service, message }]);

  if (error) {
    console.error('[Supabase Error]', error.message);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
