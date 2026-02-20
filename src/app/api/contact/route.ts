import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import serverConfig from '@/app/envConfig/server';
import { ContactFormSchema } from '@/app/lib/validations/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedFields = ContactFormSchema.safeParse(body);
    if (!validatedFields.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Por favor, corrige los errores en el formulario.',
        },
        { status: 400 },
      );
    }

    const apiUrl = serverConfig.API_URL || 'http://localhost:8080';
    const upstream = new URL('/api/v1/contact', apiUrl);
    const resp = await fetch(upstream.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
      cache: 'no-store',
    });

    const json = await resp.json().catch(() => null);
    if (!resp.ok) {
      return NextResponse.json(
        json ?? {
          success: false,
          message: 'Error del servidor. Por favor, intenta más tarde.',
        },
        { status: resp.status },
      );
    }

    return NextResponse.json(json, { status: 200 });
  } catch (error) {
    console.error('/api/contact error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error al enviar el mensaje. Por favor, intenta de nuevo.',
      },
      { status: 500 },
    );
  }
}
