import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
      <div className='bg-cyan-400 space-y-3'>
        <div className='font-bold text-5xl text-center pt-10 '>
          Backed by the best
        </div>
        <div className='font-light text-2xl text-center'>
          Wealthup is backed and supported by
        </div>
        <div className="flex flex-row py-10">
          <div class="basis-1/4"></div>
          <img src="/RazorpayRize.png"  className="max-h-12 w-full object-contain inline basis-1/4" />
          <img src="/LevelUp.png"       className="max-h-12 w-full object-contain inline basis-1/4" />
        </div>
      </div>
      <div className="bg-sky-700 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="mt-3 text-3xl font-extrabold leading-6 text-gray-100 group-hover:text-gray-600 pl-80">
              Transforming Lives - Financially!
          </h3>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:pl-20">
              <span className="flex col-span-2 lg:col-span-2 font-bold text-1xl tracking-wide">
                <article className="flex-none max-w-xl flex-col items-start justify-between pt-10">
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src="https://s01.sgp1.digitaloceanspaces.com/thumbnail/842637-62207-cdbbbuuzoy-1499151100.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-100">
                      
                        <span className="absolute inset-0" />
                        Simrin Sirur
                      </p>
                      <p className="text-gray-100">Journalist</p>
                      <p className="text-gray-100">The Print, Gurugram</p>
                    </div>
                  </div>
                  <div className="group relative">
                    <p className="mt-5 line-clamp-4 text-lg leading-6 text-gray-100 font-sans italic">I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked 
                    me through everything... now feel more confident to handle my own money</p>
                  </div>
                </article>
                <img src="/Final.png" className='h-90 w-80' />
              </span>
          </div>
        </div>
      </div>

    
    
    <div className="bg-cyan-400 py-16 sm:py-3.5">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <strong className="font-bold text-gray-900 dark:text-white">
            Trusted By Clients From 50+ Companies
          </strong>
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="data:image/png;base64,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"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbUlEQVR4nO2XzYoTQRCA+1lKBf9QEBUWvHjzEQTBi0+gPoWCoDevwh704s2D3nyGTja7LkYxCMm6Oz35MemZzExJTWYmnU53zLKbNANdUAS6q7vrq67qmjDgAdZZmWsHwANw91EEn0LcfSTBFzGvpzLXDoAH4O6jCD6FuPtIgi9iXk9lrh2AugI87YywE6X1A3hw2Md3xxIzxFzPDPA7TlGXv2mGn/sx7uyHlaFI6Li5/IpSfN0b46XGbJ7WkAySrFpTjo3T2dif6fJZJMNi/mQ63+NFd4zkG429DyTePwhzn8iPbzLBZ53RDKA8xCRfh3HljMzMdi+743xelXKNPkYgNgHNXhfTyuedEbJVm1JArjREvnnPEr22TNYGOPrPDZxWvssE2UQBoE3utMSC0e3WDEDVJz+H1XyU4doApxl/2B7kqsqj9gAf/xguBJipqUGbXNA2ut4UeLkR5IUXaHWASiGeNwAUY+qJuh25wyiCqsHdVrjg3EUe4NujyZLjqwBuNAVebYrtAMT2EshzlhZ0DS+VDmDL740DTFcA7J5IY3Rv7oklAHpStw0wJQBDWmM/yfBDIPFaU1g31gEo1ejtpv6wLYBYB7B1O7XQKfqmG9D13v68lspGthGA1LKZqrYOqgOEputExINJshGAiABMBrp+FNFaAOqLpsqrolufN4DMMmTlNw7lvQ3g1p7AL/0Y1aZXyqcwquzUPkEwhzLBN71J9b1UKnVetQNDocfFi0K/+u3Tr25H30r+/wA4VubaAfAA3H0UwacQdx9J8EXM66nMtQPgAbj7KIJPIe4+kuCLmNdTmWsHzgrwD3ZGvd+VS09tAAAAAElFTkSuQmCC"
            alt="Reform"
            width={158}
            height={48}
          />
          <span className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 font-bold text-1xl tracking-wide">
            <img
              className="inline"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnElEQVR4nO3aOw6AIBRE0bcW9r8SPxX7sNLKQivrwQmGIPcktIYXrg0hUt6uP6xovQEGyaOcyHqcV03Pd2uaj1MPUtvX300M8hInIpCWi7QE0nKRlkBaLtISSMtFWgJpuUhLGOfyIXW6gsuHQvzsAmm5SEsgLRdpCaTlIi2BtFykJZCWi7SEcdJaOngwMO0FDwZ6XdF6AwySf3oiN9QkCo/acdfTAAAAAElFTkSuQmCC"
              alt="Tuple"
            />Microsoft
          </span>
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOElEQVR4nO3Yv08bMRQHcP8tropUVUgVA1LHDh26sLB06tSJiY0FNm/t1KlTJyYmFhaWDh06Vur3JfyMGgI5KJD8Cw+9QFC4nO/8UBKfwMOTLpezz5/3fInPxqLPTyFM7AEkCFJF+tGnj03PCOJn2qaKIH52baoI4mc0VQTPeYnicMJr6HCXwNmUokvgDTrhL2hPByIIuZEcr+CMT4kmjjgl4lWcDe4hnzUYo0EMIRKfkHF7gogOEX+m7n3/w/OhGKNBjEIklnHORxOoTIuIP+L8Qd+j34dgjAaRh0h8wAU3qfloxD41eIkuxvrNctdVYYwGUQSReIdL/vMIzF9q8Hv8L+wzK7i+DGM0CB9EYhHX/Iv2gxG/aY/f4srbX+Zp58MYDaIMIvEG17yLg0rETzrghRKELYH4MEaDqIJIvEaPt+nQ236HDnkevcp+sopx5DFGgwiBSMyhx5s4Hmu7RUf8KgBhAyB5jNEgQiESL9Hj79S6b/eDWoNzoe2zwPEMMUaD0EAkXqDPX+nfIORY0zZTjEkMRtY104RIxr5NG0Lt26mlwdRtajm6m1rDhqGYOj3s7g7xABKKqcvPrxtBjEFCMHX4Q3Q5RCGkChN7ieIKEF5IGSbmotF5EKUQHybWMt6VICohRZgYL1auAhEEyWNm/arrAhDBkFHMLDcfXCBCBZGQNc36DLaD1tEZ3Esztue5QWdrHCb2ABIEqSL96NPHpmcE8TNtU0UQP7s2VQTxM5oqgtsk3AAqc7ctUwKnSAAAAABJRU5ErkJggg=="
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <span
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 font-bold text-2xl" 
          >thePrint
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}
