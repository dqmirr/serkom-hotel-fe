'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Hero } from '@/components/Hero'
import { Produk } from '@/components/Produk'
import { TentangKami } from '@/components/TentangKami'

export default function Home() {
  
  return (
  <div>
    <Hero/>
    <Produk/>
    <TentangKami/>
  </div>  
  )
}
