import { supabase } from "@/utils/supabase/client";

export async function POST(req) {
  try {

    const formData = await req.formData();
    const data = Object.fromEntries(formData);

    const { nama, diskon, jenis_kelamin, no_identitas, tipe_kamar, durasi, total } = data;
    const { error: pemesananError } = await supabase.from('pemesanan').insert({ nama, diskon, jenis_kelamin, no_identitas, tipe_kamar, durasi, total });
    if (pemesananError) {
      return Response.json({ message: 'something went wrong', pemesananError }, { status: 500 });
    }
    return Response.json({ message: "pemesanan berhasil" });
  } catch (error) {
    console.error(error);
  }
}
