import { supabase } from "@/utils/supabase/client";

export async function GET(_req) {

  const { data: pemesanan, error } = await supabase.from('pemesanan').select();

  console.log(pemesanan);
  if (error) {
    throw new Error('something went wrong', error);
  }
  return Response.json(pemesanan) || [];
}
