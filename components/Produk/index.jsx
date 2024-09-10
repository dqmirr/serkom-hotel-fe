import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Standard',
    fasilitas:{
      iconKasur:"",
      iconKamarMandi:"",
      kasur:"Double regular Bed",
      kamarMandi:"Shower + Heater"
    },
    harga:"500000",
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      url: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1714915177~exp=1714918777~hmac=bdf47af7956531b04618ef5a9639149e1ef76d167883c0fa5511af68b97789ec&w=740"
  },
  {
    name: 'Deluxe',
    fasilitas:{
      iconKasur:"",
      iconKamarMandi:"",
      kasur:"King Size Bed",
      kamarMandi:"Shower + Heater"
    },
    harga:"750000",
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    url: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1714915177~exp=1714918777~hmac=bdf47af7956531b04618ef5a9639149e1ef76d167883c0fa5511af68b97789ec&w=740"
  },
  {
    name: 'Family',
    fasilitas:{
      iconKasur:"",
      iconKamarMandi:"",
      kasur:"2 King Size Bed",
      kamarMandi:"Shower + Heater + Bath tub"
    },
    harga:"1000000",
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      url: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1714915177~exp=1714918777~hmac=bdf47af7956531b04618ef5a9639149e1ef76d167883c0fa5511af68b97789ec&w=740"
  },
]

export const Produk = ()=> {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pilihan kamar yang tersedia
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Rasakan pengalaman yang beragam dengan tipe kamar yang telah kami sediakan. 
          </p>  
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-3 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <img src={feature.url} className="w-full" alt="Foto Kamar " />
                <a
                  href="#"
                  // class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 class="mb-2 text-2xl py-4 font-bold tracking-tight text-gray-900 dark:text-white">
                    {feature.name}
                  </h5>
                  <div className="grid grid-cols-5">
                  {/* <i className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 fa-light fa-bed" /> */}
                  <i class="py-1 fa-solid fa-bed text-white"></i>
                  <p className="col-span-4 text-gray-300">{feature.fasilitas.kasur}</p>
                  </div>
                  <div className="py-2 grid grid-cols-5 text-gray-300">
                  <i class="py-1 fa-solid fa-shower text-white"></i>
                  <p className="col-span-4">{feature.fasilitas.kamarMandi}</p>
                  </div>
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                    {feature.description}
                  </p>
                  <p class="py-4 font-normal text-bold text-md text-white dark:text-white">
                    Harga: {feature.harga}
                  </p>
                  
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     harga: '$35',
//     fasilitas:'',
//   },
//   {
//     id: 1,
//     name: 'Basic Tee',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     harga: '$35',
//     fasilitas:'',
//   },
//   {
//     id: 1,
//     name: 'Basic Tee',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     harga: '$35',
//     fasilitas:'',
//   },
//   // More products...
// ]

// const features = [
//   { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//   { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//   { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//   { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//   { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//   { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
// ]

// export  const Produk = ()=> {
//   return (
//     // <div className="bg-white">
//     //   <div className="mx-auto items-center gap-x-8 gap-y-16 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
//     //       <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Tipe Kamar</h1>
//     //       <p className="mt-4 text-gray-500">
//     //         Kami menyediakan beberapa pilihan yang dapat anda pilih sesuai
//     //       </p>
//     //   </div>
//     //   <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
//     //     <div>
          
//     //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
//     //       <p className="mt-4 text-gray-500">
//     //         The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
//     //         steel divider separates active cards from new ones, or can be used to archive important task lists.
//     //       </p>

//     //       <dl className="mx-auto mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
//     //         {features.map((feature) => (
//     //           <div key={feature.name} className="border-t border-gray-200 pt-4">
//     //             <dt className="font-medium text-gray-900">{feature.name}</dt>
//     //             <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
//     //           </div>
//     //         ))}
//     //       </dl>
//     //     </div>
//     //     <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
//     //       <img
//     //         src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
//     //         alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
//     //         className="rounded-lg bg-gray-100"
//     //       />
//     //       <img
//     //         src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
//     //         alt="Top down view of walnut card tray with embedded magnets and card groove."
//     //         className="rounded-lg bg-gray-100"
//     //       />
//     //       <img
//     //         src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
//     //         alt="Side of walnut card tray with card groove and recessed card area."
//     //         className="rounded-lg bg-gray-100"
//     //       />
//     //       <img
//     //         src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
//     //         alt="Walnut card tray filled with cards and card angled in dedicated groove."
//     //         className="rounded-lg bg-gray-100"
//     //       />
//     //     </div>
//     //   </div>
//     // </div>
    
//   )
// }
