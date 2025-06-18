import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import type { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={service.image}
            alt={service.altText}
            className="object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {service.description}
        </p>
        <div className="mt-4">
          <button
            type="button"
            className="text-sm font-medium text-primary hover:text-primary/80"
            onClick={() => setIsModalOpen(true)}
          >
            Más información →
          </button>
        </div>
      </motion.div>

      <Dialog
  open={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  className="relative z-50"
>
  <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-2 md:p-4 overflow-y-auto z-50">
    <Dialog.Panel className="relative mx-auto max-w-4xl w-full rounded-2xl bg-white p-4 md:p-6 flex flex-col md:flex-row gap-6 max-h-[95vh] overflow-y-auto">
      {/* Botón cerrar (X) arriba a la derecha */}
      <button
        type="button"
        className="absolute top-2 right-2 z-10 text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2 transition-colors shadow-md bg-white/80 backdrop-blur"
        onClick={() => setIsModalOpen(false)}
        aria-label="Cerrar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {/* Imagen arriba en móvil, izquierda en desktop */}
      <div className="w-full md:w-1/2 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 mb-4 md:mb-0 flex items-center justify-center">
        <img
          src={service.image}
          alt={service.altText}
          className="w-full h-auto max-h-56 md:max-h-none object-cover object-center"
        />
      </div>

      {/* Contenido debajo en móvil, derecha en desktop */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <Dialog.Title className="text-xl font-semibold text-gray-900">
            {service.title}
          </Dialog.Title>
          <Dialog.Description className="mt-4 text-gray-600">
            {service.longDescription}
          </Dialog.Description>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90"
            onClick={() => setIsModalOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>

    </>
  );
}
