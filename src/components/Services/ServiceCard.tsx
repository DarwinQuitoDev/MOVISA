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
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="mx-auto max-w-4xl rounded-2xl bg-white p-6 flex gap-6">
      {/* Imagen a la izquierda */}
      <div className="w-1/2 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={service.image}
          alt={service.altText}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Contenido a la derecha */}
      <div className="w-1/2 flex flex-col justify-between">
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
