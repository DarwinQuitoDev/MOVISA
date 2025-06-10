import { motion } from 'framer-motion';
import { ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

const schedule = [
  { day: 'Lunes a Viernes', hours: '8:00 AM - 7:00 PM' },
  { day: 'Sábado', hours: '8:00 AM - 1:00 PM' },
  { day: 'Domingo', hours: 'Cerrado' },
];

export default function Schedule() {
  return (
    <section id="horarios" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Horarios de Atención
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Estamos disponibles en horarios convenientes para adaptarnos a tu agenda.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="mt-4 flex items-center gap-x-4">
              <ClockIcon className="h-6 w-6 flex-none text-primary" aria-hidden="true" />
              <h3 className="flex-auto text-lg font-semibold leading-8 text-gray-900">
                Nuestros Horarios
              </h3>
            </div>
            <div className="mt-8">
              <ul className="grid grid-cols-1 gap-4">
                {schedule.map((timeSlot) => (
                  <li
                    key={timeSlot.day}
                    className="flex items-center justify-between rounded-lg bg-white hover:bg-gray-100 px-6 py-4 shadow-sm ring-1 ring-gray-900/5"
                  >
                    <div className="font-medium text-gray-900">{timeSlot.day}</div>
                    <div className="text-gray-600">{timeSlot.hours}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  ¿Necesitas agendar una cita?
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-4">
                  <PhoneIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <a
                    href="https://wa.me/593959518764" target="_blank" rel="noopener noreferrer"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    095 951 8764
                  </a>
                  
                </div>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  También puedes escribirnos por WhatsApp
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
