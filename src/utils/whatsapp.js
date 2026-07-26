import { company } from '../data/siteData';

/**
 * Construye una URL de WhatsApp con un mensaje prellenado y la abre
 * en una nueva pestaña.
 */
export function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${company.whatsappNumber}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Construye el mensaje del formulario de cotización a partir de los
 * datos capturados por el usuario.
 */
export function buildQuoteMessage({ name, business, projectType, plan, description, budget }) {
  const lines = [
    'Hola, VizNet. Me interesa cotizar un proyecto web.',
    '',
    `Nombre: ${name}`,
    `Negocio: ${business}`,
    `Tipo de proyecto: ${projectType || 'No especificado'}`,
    `Paquete de interés: ${plan || 'No especificado'}`,
    `Descripción: ${description}`,
  ];

  if (budget) {
    lines.push(`Presupuesto aproximado: ${budget}`);
  }

  lines.push('', 'Me gustaría recibir más información.');

  return lines.join('\n');
}
