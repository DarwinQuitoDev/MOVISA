import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Inicio', to: '/' },
  { name: 'Servicios', to: '/#servicios' },
  { name: 'Horarios', to: '/#horarios' },
  { name: 'Ubicación', to: '/#ubicacion' },
  { name: 'Contacto', to: '/#contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white backdrop-blur-sm">
      <nav className="flex items-center justify-between p-5 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/#" className="-m-1.5 p-1.5">
            <img 
              src="/assets/img/logo.webp" 
              alt="MOVISA Logo" 
              className="h-20 w-auto"
            />
          </a>  
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className="text-sm font-semibold leading-10 text-gray-900 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:+593959518764"
            className="text-sm font-semibold leading-6 text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
          >
            Llamar ahora
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img 
                src="/assets/img/logo.webp" 
                alt="MOVISA Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="tel:+593959518764"
                  className="block text-center text-sm font-semibold leading-6 text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
