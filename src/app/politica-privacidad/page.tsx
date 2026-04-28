import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Tratamiento de Datos — RZ Group SAS',
  description: 'Política de tratamiento de datos personales de RZ Group SAS, en cumplimiento de la Ley 1581 de 2012.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="bg-[#f9f9fe] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">

        <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-6">
          ›&nbsp;&nbsp;Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight mb-4">
          Política de Tratamiento de Datos Personales
        </h1>
        <p className="text-sm font-light text-foreground/40 mb-16">RZ Group SAS</p>

        <div className="prose prose-sm max-w-none font-light text-foreground/70 leading-relaxed space-y-10">

          <section>
            <h2 className="text-base font-light text-foreground mb-3">1. Objetivo</h2>
            <p>Definir las políticas y normas corporativas para el tratamiento de datos personales, el cual podrá implicar la recolección, almacenamiento, uso, circulación, supresión, transmisión, transferencia y/o recepción de los mismos, con el fin de dar cumplimiento con lo dispuesto en la Ley 1581 de 2012 y su Decreto Reglamentario 1377 de 2013.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">2. Alcance</h2>
            <p>Esta política de protección de datos personales se aplicará a todas las bases de datos y/o archivos que contengan datos personales que sean objeto de tratamiento por parte de RZ GROUP SAS (en adelante LA EMPRESA).</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">3. Marco legal</h2>
            <p><strong className="font-normal text-foreground/90">Artículo 15 de la Constitución Política de Colombia:</strong> "Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas".</p>
            <p className="mt-3"><strong className="font-normal text-foreground/90">Ley Estatutaria 1581 de 2012:</strong> "Por la cual se dictan disposiciones generales para la protección de datos personales".</p>
            <p className="mt-3"><strong className="font-normal text-foreground/90">Decreto 1377 de 2013:</strong> "Por el cual se reglamenta parcialmente la Ley 1581 de 2012".</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">4. Identificación del responsable del tratamiento</h2>
            <p>RZ GROUP SAS, sociedad con domicilio en la carrera 18 No. 93a-04, oficina 206 de la ciudad de Bogotá, Colombia. Correo electrónico: reservas@rzgroupsas.com.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">5. Definiciones</h2>
            <dl className="space-y-3">
              {[
                ['Autorización', 'Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de Datos Personales.'],
                ['Base de datos', 'Conjunto organizado de Datos Personales que sea objeto de tratamiento.'],
                ['Datos personales', 'Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.'],
                ['Encargado del tratamiento', 'Persona natural o jurídica que realice el Tratamiento de Datos Personales por cuenta del responsable del Tratamiento.'],
                ['Responsable del tratamiento', 'Persona natural o jurídica que decida sobre la Base de Datos y/o el Tratamiento de los datos.'],
                ['Titular', 'Persona natural cuyos Datos Personales sean objeto de Tratamiento.'],
                ['Tratamiento', 'Cualquier operación sobre Datos Personales, tales como la recolección, almacenamiento, uso, circulación o supresión.'],
                ['Transferencia', 'Envío de información o datos personales a un receptor Responsable del Tratamiento dentro o fuera del país.'],
                ['Transmisión', 'Tratamiento de Datos Personales que implica la comunicación de los mismos dentro o fuera de Colombia.'],
              ].map(([term, def]) => (
                <div key={term}>
                  <dt className="text-foreground/90 font-normal inline">{term}: </dt>
                  <dd className="inline">{def}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">6. Tratamiento de datos</h2>
            <p>LA EMPRESA, actuando en calidad de responsable del tratamiento de datos personales, recolecta, almacena, usa, circula y suprime datos personales correspondientes a personas naturales con quienes tiene o ha tenido relación, tales como: trabajadores y familiares de éstos, accionistas, clientes, distribuidores, proveedores, acreedores y deudores.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">7. Finalidad</h2>
            <p className="mb-3">Los datos personales son objeto de tratamiento con las siguientes finalidades:</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                'Para el envío de información a sus trabajadores y familiares.',
                'Para la prestación de servicios de salud a los familiares de los trabajadores beneficiarios.',
                'Para el reconocimiento, protección y ejercicio de los derechos de los accionistas.',
                'Para el fortalecimiento de las relaciones con consumidores y clientes, atención de PQRs, evaluación de calidad e invitación a eventos.',
                'Para la verificación de saldos de sus acreedores.',
                'Para actividades de mercadeo, estadísticas, investigación y demás propósitos comerciales.',
                'Para la atención de requerimientos judiciales o administrativos y el cumplimiento de mandatos legales.',
                'Para contactar vía correo electrónico o cualquier otro medio a personas con quienes tiene o ha tenido relación.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary shrink-0">7.{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">8. Derechos de los titulares</h2>
            <p className="mb-3">Las personas naturales cuyos datos sean objeto de tratamiento tienen los siguientes derechos:</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                'Conocer los datos personales sobre los cuales LA EMPRESA está realizando el tratamiento, y solicitar su actualización o rectificación.',
                'Solicitar prueba de la autorización otorgada para el tratamiento de sus datos personales.',
                'Ser informado respecto del uso que se le ha dado a sus datos personales.',
                'Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a la Ley de Protección de Datos.',
                'Solicitar la supresión de sus datos personales y/o revocar la autorización otorgada para el tratamiento.',
                'Acceder de forma gratuita a sus Datos Personales objeto de Tratamiento.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary shrink-0">8.{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">9. Autorización</h2>
            <p>LA EMPRESA debe solicitar autorización previa, expresa e informada a los Titulares de los Datos Personales. La autorización debe ser otorgada a más tardar en el momento de la recolección de los datos. En ningún caso LA EMPRESA asimilará el silencio del titular a una conducta inequívoca.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">10. Datos personales de naturaleza sensible</h2>
            <p className="mb-3">Se consideran datos sensibles aquellos relacionados con: origen racial o étnico, orientación política, convicciones religiosas o filosóficas, pertenencia a sindicatos u organizaciones, salud, vida sexual y datos biométricos.</p>
            <p>El tratamiento de datos sensibles está prohibido salvo autorización expresa del Titular. Ninguna actividad podrá condicionarse al suministro de datos sensibles.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">11. Datos de niños, niñas y adolescentes</h2>
            <p>LA EMPRESA solo realizará el tratamiento de datos de menores cuando responda al interés superior del niño, niña o adolescente, con autorización del representante legal, previo ejercicio del menor de su derecho a ser escuchado.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">12. Procedimiento para peticiones, consultas, quejas y reclamos</h2>
            <p className="mb-3">Los Titulares pueden ejercer sus derechos a través de los siguientes canales:</p>
            <ul className="space-y-2">
              <li>Comunicación dirigida a RZ GROUP SAS a la dirección carrera 18 No. 93a-04, oficina 206 de Bogotá.</li>
              <li>Solicitud presentada al correo electrónico: reservas@rzgroupsas.com</li>
            </ul>
            <p className="mt-3">Las peticiones y consultas serán atendidas en un término máximo de diez (10) días hábiles. Las quejas y reclamos en un máximo de quince (15) días hábiles.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">13. Seguridad de los datos personales</h2>
            <p>LA EMPRESA proporcionará las medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado. LA EMPRESA exigirá a sus proveedores la adopción de medidas equivalentes.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">14. Transferencia y transmisión de datos</h2>
            <p>LA EMPRESA podrá entregar datos personales a terceros cuando se trate de contratistas en ejecución de contratos para el desarrollo de sus actividades, o por transferencia de cualquier línea de negocio. En todo caso, los Encargados deberán tratar la información conforme a esta Política y guardar confidencialidad.</p>
          </section>

          <section>
            <h2 className="text-base font-light text-foreground mb-3">15. Vigencia</h2>
            <p>Esta Política de Protección de Datos Personales está vigente desde el 01 de enero de 2020.</p>
          </section>

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
