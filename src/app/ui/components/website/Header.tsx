'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const minimalHeaderPaths = ['/login', '/signup'];
  const showMinimalHeader = minimalHeaderPaths.includes(pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-blue-600 font-bold'
      : 'text-gray-600 hover:text-blue-500';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-blue-600 flex items-center"
              prefetch={false}
            >
              <Image
                src="/enpunto-new.svg"
                alt="En Punto"
                width={150}
                height={60}
                priority
              />
            </Link>
          </div>
          {!showMinimalHeader && (
            <div className="hidden sm:ml-6 sm:flex sm:items-center flex-1 justify-end">
              <nav className="flex space-x-8">
                <Link
                  href="/contact"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                    pathname === '/contact'
                      ? 'border-blue-500'
                      : 'border-transparent'
                  } ${isActive('/contact')}`}
                >
                  Contacto
                </Link>
                <Link
                  href="/about"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                    pathname === '/about'
                      ? 'border-blue-500'
                      : 'border-transparent'
                  } ${isActive('/about')}`}
                >
                  Nosotros
                </Link>
              </nav>
              <div className="flex items-center space-x-4 ml-auto">
                <Link
                  href="/login"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign up
                </Link>
              </div>
            </div>
          )}

          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {!isMenuOpen ? (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <X className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                pathname === '/'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                pathname === '/about'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              Nosotros
            </Link>
            <Link
              href="/contact"
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                pathname === '/contact'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              Contacto
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
