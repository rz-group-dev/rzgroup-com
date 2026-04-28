import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Cookies — RZ Group SAS',
  description: 'Información sobre el uso de cookies en el sitio web de RZ Group SAS.',
};

export default function PoliticaCookiesPage() {
  return (
    <main className="bg-[#f9f9fe] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">

        <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-6">
          ›&nbsp;&nbsp;Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight mb-4">
          Política de Cookies
        </h1>
        <p className="text-sm font-light text-foreground/40 mb-16">RZ Group SAS</p>

        <div className="font-light text-foreground/70 leading-relaxed space-y-10">

          <section>
            <h2 className="text-base font-light text-foreground mb-3">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Permiten que el sitio recuerde sus preferencias y acciones durante un período de tiempo, para que no tenga que volver a introducirlos cada vez que vuelva al sitio.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">¿Qué cookies utilizamos?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-normal text-foreground/90 mb-2">Cookies esenciales</h3>
                <p className="text-sm">Son necesarias para que el sitio web funcione correctamente. Sin ellas, no es posible navegar por el sitio ni usar sus funciones básicas. No almacenan información personal identificable.</p>
              </div>
              <div>
                <h3 className="text-sm font-normal text-foreground/90 mb-2">Cookies de preferencias</h3>
                <p className="text-sm">Permiten que el sitio recuerde información que cambia el aspecto o comportamiento del sitio, como el idioma preferido (español/inglés). Estos datos son almacenados localmente en su dispositivo mediante <code className="text-xs bg-foreground/5 px-1 py-0.5 rounded">localStorage</code>.</p>
              </div>
              <div>
                <h3 className="text-sm font-normal text-foreground/90 mb-2">Cookies analíticas</h3>
                <p className="text-sm">Nos ayudan a entender cómo los visitantes interactúan con el sitio web mediante la recopilación y reporte de información de forma anónima. Utilizamos esta información para mejorar la experiencia del usuario.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">¿Cómo controlar las cookies?</h2>
            <p className="mb-3">Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su dispositivo y puede configurar la mayoría de los navegadores para que no las acepten.</p>
            <p>Sin embargo, si lo hace, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite el sitio y que algunos servicios y funcionalidades no funcionen.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">Configuración en su navegador</h2>
            <p className="mb-3">La mayoría de los navegadores permiten controlar las cookies a través de su configuración. Para más información, consulte la documentación de su navegador:</p>
            <ul className="space-y-2 text-sm">
              <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
              <li>Mozilla Firefox: Opciones → Privacidad y seguridad</li>
              <li>Safari: Preferencias → Privacidad</li>
              <li>Microsoft Edge: Configuración → Privacidad, búsqueda y servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">Cookies de terceros</h2>
            <p>Nuestro sitio puede incluir funcionalidades proporcionadas por terceros (como mapas interactivos o integraciones de redes sociales) que pueden establecer sus propias cookies. No tenemos control sobre estas cookies. Consulte las políticas de privacidad de los terceros correspondientes para más información.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">Actualización de esta política</h2>
            <p>Nos reservamos el derecho de actualizar esta Política de Cookies en cualquier momento. Le notificaremos cualquier cambio publicando la nueva política en esta página. Le recomendamos revisarla periódicamente.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">Contacto</h2>
            <p>Si tiene preguntas sobre el uso de cookies en nuestro sitio, puede contactarnos en:</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Correo: <a href="mailto:reservas@rzgroupsas.com" className="text-primary hover:text-primary/70 transition-colors">reservas@rzgroupsas.com</a></li>
              <li>Dirección: Carrera 18 No. 93a-04, oficina 206, Bogotá, Colombia</li>
            </ul>
          </section>

          <p className="text-xs text-foreground/40">Última actualización: enero de 2020.</p>

        </div>

        <div className="mt-16 pt-8 border-t border-foreground/10">
          <Link href="/" className="text-xs font-light tracking-widest text-primary hover:text-primary/70 transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
