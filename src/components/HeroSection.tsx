import { motion } from 'framer-motion';

import instalacion from "../assets/img/4.webp"
import equipo from "../assets/img/6.webp"
import atencion from "../assets/img/1.webp"
import whatsappIcon from "../assets/svg/whatsapp-svgrepo-com.svg"


export default function HeroSection() {
  return (
    <div id="home" className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-8 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <motion.div 
            className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Centro fisioterapeutico
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              MOVISA OTAVALO
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              En <b>MOVISA</b>, nos dedicamos a mejorar tu calidad de vida a través de <b>terapias personalizadas </b>
              y <b>atención profesional</b> especializada. Contamos con las técnicas más modernas y un equipo
              comprometido con tu recuperación, contamos con servicio a <b>atención a domicio</b>.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://wa.me/593959518764" target="_blank" rel="noopener noreferrer"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary inline-flex items-center gap-2"
              > 
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5"/>
                Agenda tu cita
              </a>
              <a href="#servicios" className="text-sm font-semibold leading-6 text-gray-900">
                Ver servicios <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative transition-all duration-300 ease-in-out transform hover:scale-110">
                <img
                  src={equipo}
                  alt="Equipo de fisioterapia MOVISA"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative transition-all duration-300 ease-in-out transform hover:scale-110">
                <img
                  src={instalacion}
                  alt="Instalaciones modernas MOVISA"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative transition-all duration-300 ease-in-out transform hover:scale-110">
                <img
                  src={atencion}
                  alt="Terapia personalizada MOVISA"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
