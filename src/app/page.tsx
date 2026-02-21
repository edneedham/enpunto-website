import {
  Truck,
  Package,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        {/* Hero Section */}
        <section className="py-20 px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Soluciones Digitales para tu Negocio
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Desarrollamos aplicaciones y plataformas tecnológicas para optimizar
              tus procesos logísticos y de gestión.
            </p>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Nuestras Soluciones
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Plataforma - Marketplace */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-6 flex justify-center">
                  <Package size={64} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Plataforma de Logística
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Conecta empresas con transportistas profesionales. Publica
                  servicios, recibe ofertas competitivas y gestiona tu logística
                  con total confianza.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Red de transportistas verificados
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Múltiples ofertas competitivas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Gestión centralizada de envíos
                    </span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/plataforma"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Ver Plataforma
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Remitos - Inlog App */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600 mb-6 flex justify-center">
                  <Smartphone size={64} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  App de Repartos
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Aplicación Android para el manejo de remitos y repartos.
                  Escanea con OCR, gestiona listas de reparto y realiza seguimiento
                  de entregas.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Escaneo de remitos con OCR
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Gestión de listas de reparto
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">100% Offline</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/remitos"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Ver App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Necesitas una solución personalizada?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos para discutir cómo podemos ayudarte a optimizar tus
              procesos.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              Contactanos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
