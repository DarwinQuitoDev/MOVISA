import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <section id="ubicacion" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestra Ubicación
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nos encontramos ubicados en el corazón de Otavalo, en un lugar accesible
            y de fácil llegada.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            title="Ubicación de MOVISA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1186.1698142463533!2d-78.25177196400607!3d0.23841452248918132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a150100ea1d91%3A0x5e1b0614549482c2!2sMOVISA%20OTAVALO!5e0!3m2!1ses!2sec!4v1747342145955!5m2!1ses!2sec"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg font-semibold text-gray-900">
            Estuardo Jaramillo y Víctor Garcés, Otavalo, Ecuador
          </p>
          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/6jHEfpbZzWJSqPcq9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              Ver en Google Maps →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
