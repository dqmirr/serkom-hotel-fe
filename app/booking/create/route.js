import { supabase } from "@/utils/supabase/client";

export async function POST(req) {
  // console.log(await req.formData());
  const formData = await req.formData();
  const data = Object.fromEntries(formData);

  const { nama, diskon, jenis_kelamin, no_identitas, tipe_kamar, durasi, total } = data;
  console.log({ nama })
  const { data: pemesanan, error: pemesananError } = await supabase.from('pemesanan').insert({ nama, diskon, jenis_kelamin, no_identitas, tipe_kamar, durasi, total });
  if (pemesananError) {
    throw new Error('something went wrong', pemesananError);
  }
  return Response.json({ message: "pemesanan berhasil" });
}

// export async function GET(_req) {
//
//   const { data: pemesanan, error } = await supabase.from('pemesanan').select();
//   if (error) {
//     throw new Error('something went wrong', error);
//   }
//   return Response.json(pemesanan) || [];
// }
