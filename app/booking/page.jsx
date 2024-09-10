'use client'

import axios from 'axios'
import { useRef, useState } from 'react'

export default ()=> {
  
  const [jenisKelamin, setJenisKelamin ] = useState('')
  const [tipeKamar, setTipeKamar ] = useState('')
  const [harga, setHarga ] = useState(0)
  const [isBreakfast, setIsBreakfast] = useState(false)
  const [total, setTotal ] = useState(0)
  const [disc, setDisc] = useState(isBreakfast?"10%":"-")
  
  const nama = useRef('')
  const no_identitas = useRef(0)
  const tanggal = useRef(Date.now('d/m/Y'))
  const durasi = useRef(0)
  
  const handleOnChange = (e)=>{
    const selected =e.target.value  
    setTipeKamar(selected)

  }

  const breakfastHandler = ()=>{
    setIsBreakfast(!isBreakfast)
  }

  const hitungHandler = (e)=>{
    if(tipeKamar == "Standar"){
        setHarga(500000)
        }else if(tipeKamar == "Deluxe"){
          setHarga(750000)
        }else if(tipeKamar == "Family"){
          setHarga(1000000)
        }else{
            setHarga(0)
        }
        
        if(durasi.current.value>=3){
            const diskon = Math.round(harga * 90/100)
            let total = diskon
            if(breakfast === true){
                total= diskon + 80000
            }
            setTotal(total)
          }else{
                setTotal(harga)
              }
      }

  const simpanHandler = async (e)=>{
    e.preventDefault();
try {
    const formData = new FormData()
    formData.append("nama", nama.current.value)
    formData.append("diskon", disc)
    formData.append("jenis_kelamin", jenisKelamin)
    formData.append("no_identitas", no_identitas.current.value)
    formData.append("tipe_kamar", tipeKamar)
    formData.append("durasi", durasi.current.value)
    formData.append("total", total)
      
      const response = await axios.post('http://localhost:8000/api/simpan', formData)
    } catch (error) {
      console.error(error)
    }
  }

return (
<div className="m-[80px]">
  <form method='POST' >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Buat Pesanan</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Masukkan informasi yang dibutuhkan
          </p>
        
          <div className="sm:col-span-4">
              <label htmlFor="nama" className="block text-sm font-medium leading-6 text-gray-900">
                Nama
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    ref={nama}
                    autoComplete="nama"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nama"
                  />
                </div>
              </div>
            </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Jenis Kelamin
              </label>
              <div className="mt-2">
                <div className="flex focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    onChange={(e)=>setJenisKelamin(e.target.value)}
                    value="Laki-laki"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Laki-laki
                  </label>
                </div>
                </div>
                <div className="flex focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    onChange={(e)=>setJenisKelamin(e.target.value)}
                    value="Perempuan"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Perempuan
                  </label>
                </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Nomor Identitas
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    ref={no_identitas}
                    autoComplete="nama"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nama"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Jenis Kamar
              </label>
              <div className="mt-2">
                <select
                  id="tipeKamar"
                  name="tipeKamar"
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Pilih tipe kamar</option>
                  <option value="Standar">Standar</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Family">Family</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Harga
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    type="text"
                    name="harga"
                    id="harga"
                    value={harga}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 disabled:bg-gray-400"
                    disabled readOnly
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Tanggal Pesan
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    name="nama"
                    id="nama"
                    ref={tanggal}
                    autoComplete="nama"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nama"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="durasi" className="block text-sm font-medium leading-6 text-gray-900">
                Durasi Menginap
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    type="number"
                    name="durasi"
                    id="durasi"
                    ref={durasi}
                    autoComplete="nama"
                    className="block w-0.5 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Breakfast
              </label>
              <div className="mt-2">
                  <input
                    type="checkbox"
                    onChange={breakfastHandler}
                    checked={isBreakfast}
                    name="breakfast"
                    id="breakfast"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Total Bayar
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="total"
                    id="total"
                    onChange={(e)=>setTotal(e.target.value)}
                    value={total}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          onClick={hitungHandler}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Hitung
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={simpanHandler}
        >
          Simpan
        </button>
        <a type="button" href="/" className="text-sm font-semibold leading-6 text-gray-900">
          Batal
        </a>
      </div>
    </form>
</div>
  )
}