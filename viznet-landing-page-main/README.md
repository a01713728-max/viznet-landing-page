# VizNet — Landing Page

Landing page premium para **VizNet**, un emprendimiento de diseño y desarrollo web enfocado en PyMEs de Ixmiquilpan, Hidalgo (y más allá).

Construida con React + Vite + Tailwind CSS + Framer Motion, con modo claro/oscuro, formulario de cotización que abre WhatsApp, y toda la información del sitio centralizada en un solo archivo para facilitar su edición.

---

## 1. ¿Qué es este proyecto?

Un sitio de una sola página (landing page) pensado para generar confianza en segundos y convertir visitantes en solicitudes de cotización por WhatsApp. Incluye:

- Hero con animación de firma (composición SVG abstracta de interfaces conectadas).
- Secciones: Por qué VizNet, Servicios, Portafolio, Proceso, Precios, Business Intelligence (demo visual), Equipo (con modal de currículum), Testimonios (carrusel), FAQ, Formulario de cotización.
- Modo claro/oscuro con persistencia en el navegador.
- Botón flotante de WhatsApp y botones de paquete con mensajes prellenados.
- SEO básico (meta tags, Open Graph, Schema.org, sitemap, robots.txt).

## 2. Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 19 | Librería de UI |
| Vite | Bundler y servidor de desarrollo |
| Tailwind CSS v4 | Estilos utilitarios (configuración CSS-first vía `@theme`) |
| Framer Motion | Animaciones |
| Lucide React | Iconografía |
| JavaScript (ES2022+) | Lenguaje del proyecto (se priorizó JS puro para mantener el proyecto simple de editar) |

No se usa backend: el formulario de cotización construye un mensaje y abre WhatsApp directamente (`wa.me`).

## 3. Cómo instalar

Requisitos: Node.js 18 o superior.

```bash
npm install
```

## 4. Cómo ejecutar localmente

```bash
npm run dev
```

Esto abre el proyecto en `http://localhost:5173` (o el puerto que indique la terminal), con recarga automática.

## 5. Cómo hacer build de producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`. Para previsualizar ese build localmente:

```bash
npm run preview
```

## 6. Cómo modificar la información del sitio

**Todo el contenido editable vive en un solo archivo:**

```
src/data/siteData.js
```

Ahí puedes cambiar, sin tocar componentes ni lógica visual:

- Nombre, descripción y ubicación de la empresa.
- Número de WhatsApp.
- Enlaces de navegación.
- Textos del Hero.
- Beneficios de "¿Por qué VizNet?".
- Servicios.
- Pasos del proceso.
- Planes y precios (incluyendo el mensaje de WhatsApp de cada botón).
- Contenido de la sección Business Intelligence (KPIs, ventas mensuales, productos top).
- Proyectos del portafolio.
- Integrantes del equipo y sus currículums.
- Testimonios.
- Preguntas frecuentes.
- Tipos de proyecto del formulario.
- Textos del footer.
- Metadata de SEO.

Busca los comentarios `// EDITAR AQUÍ` dentro del archivo para ubicar rápidamente cada bloque.

> Actualmente varios campos contienen placeholders entre corchetes, por ejemplo `[INSERTAR NOMBRE DEL INTEGRANTE 1]`. Reemplázalos con la información real antes de publicar el sitio — no se inventó ningún dato de clientes, proyectos, testimonios ni currículums.

## 7. Cómo cambiar imágenes

Las imágenes se organizan en:

```
public/images/
├── logo/          (logo de VizNet, imagen para Open Graph)
├── team/          (fotos del equipo)
├── portfolio/     (imágenes de proyectos)
└── testimonials/  (fotos de clientes, opcional)
```

1. Coloca tu archivo de imagen dentro de la carpeta correspondiente.
2. Actualiza la ruta en `src/data/siteData.js` (por ejemplo, el campo `photo` de un integrante del equipo o `image` de un proyecto del portafolio).

Actualmente las tarjetas de proyecto muestran un marcador visual ("Imagen del proyecto") porque no se subieron imágenes reales — al conectar una ruta válida en `siteData.js`, sustituye ese bloque por una etiqueta `<img>` o `background-image` apuntando al archivo.

**Logo:** el logo real en PNG que proporciones debe colocarse en `public/images/logo/viznet-logo.png`. Mientras tanto, la Navbar y el Footer usan un wordmark de texto ("V" + "VizNet") como referencia temporal.

## 8. Cómo agregar o modificar proyectos del portafolio

Edita el arreglo `portfolio` en `src/data/siteData.js`. Cada proyecto acepta:

```js
{
  id, name, client, category, description,
  technologies: [...],
  image, imageSecondary,
  url, buttonLabel,
}
```

Para agregar un quinto proyecto, agrega un nuevo objeto al arreglo y ajusta el layout en `src/sections/Portfolio.jsx` si quieres mantener la composición asimétrica.

## 9. Cómo modificar testimonios

Edita el arreglo `testimonials` en `src/data/siteData.js`. El carrusel (`src/sections/Testimonials.jsx`) se adapta automáticamente a la cantidad de testimonios.

## 10. Cómo modificar precios

Edita el arreglo `pricingPlans` en `src/data/siteData.js`. Cada plan controla su propio precio, características y el mensaje de WhatsApp que se envía al hacer clic en su botón (`whatsappMessage`).

## 11. Cómo modificar el número de WhatsApp

Cambia el campo `whatsappNumber` (formato internacional, sin signos `+` ni espacios) y `whatsappDisplay` en el objeto `company` de `src/data/siteData.js`:

```js
export const company = {
  ...
  whatsappNumber: '527721601652',
  whatsappDisplay: '772 160 1652',
  ...
};
```

## 12. Variables de entorno

Actualmente el proyecto **no requiere variables de entorno**: el formulario de cotización no tiene backend propio y todo el contenido es estático.

Si en el futuro se conecta Supabase (ver sección 15) o cualquier otro servicio, se recomienda:

1. Crear un archivo `.env` (ya ignorado por git) con el prefijo `VITE_`, por ejemplo:
   ```
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   ```
2. Nunca colocar claves privadas directamente en el código o en `siteData.js`.
3. Documentar cada variable nueva en este README.

## 13. Git y GitHub

El proyecto ya incluye un `.gitignore` apropiado. Para subirlo:

```bash
git init
git add .
git commit -m "Primera versión de la landing page de VizNet"
git branch -M main
git remote add origin <URL-DE-TU-REPOSITORIO>
git push -u origin main
```

## 14. Cómo desplegar en Vercel

1. Sube el proyecto a GitHub (paso anterior).
2. Entra a [vercel.com](https://vercel.com) y crea un nuevo proyecto importando el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite. Configuración por defecto:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Da clic en **Deploy**. Cada nuevo `push` a la rama principal generará un nuevo despliegue automáticamente.
5. Si agregas variables de entorno (sección 12), configúralas también en el panel de Vercel (**Settings → Environment Variables**).

## 15. Preparado para integración futura con Supabase

La sección **Negocios Plus** ofrece inventario administrado mediante archivos Excel/CSV. Esta landing page **no implementa ese backend todavía**, pero deja la arquitectura lista para conectarlo:

- El contenido del catálogo/inventario debería vivir en una tabla de Supabase (por ejemplo `products`), separada de `siteData.js`.
- Un futuro flujo de carga de Excel podría:
  1. Recibir el archivo desde un componente de subida (`<input type="file">`).
  2. Parsear el archivo en el cliente (por ejemplo con una librería ligera de lectura de hojas de cálculo) o enviarlo a una Edge Function de Supabase.
  3. Validar las columnas esperadas (nombre, precio, stock, categoría, etc.).
  4. Insertar/actualizar los registros en Supabase.
  5. Consultar esos datos desde un nuevo componente de catálogo público, reemplazando los datos estáticos de ejemplo.
- El **dashboard de Business Intelligence** (`src/sections/BusinessIntelligence.jsx`) actualmente usa datos de ejemplo definidos en `siteData.js` (`businessIntelligence.kpis`, `.monthlySales`, `.topProducts`). Cuando exista un backend real, estos valores pueden sustituirse por una consulta a Supabase (por ejemplo mediante `@supabase/supabase-js` y hooks de datos), manteniendo la misma estructura de props que ya consumen los componentes visuales.
- Las credenciales de Supabase deben manejarse exclusivamente mediante variables de entorno (ver sección 12), nunca hardcodeadas.

## 16. Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables (Button, Navbar, tarjetas, modal, etc.)
├── sections/         # Cada sección de la landing page (Hero, Servicios, Precios, etc.)
├── data/
│   └── siteData.js   # Contenido editable centralizado
├── context/
│   └── ThemeContext.jsx  # Lógica de modo claro/oscuro con persistencia
├── hooks/
│   └── useReducedMotion.js
├── utils/
│   ├── whatsapp.js        # Construcción de enlaces y mensajes de WhatsApp
│   └── motionVariants.js  # Variants reutilizables de Framer Motion
├── App.jsx
└── main.jsx

public/
├── images/{logo,team,portfolio,testimonials}/
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## 17. Accesibilidad y rendimiento

- HTML semántico, `alt`/`aria-label` en elementos interactivos, estados de foco visibles.
- Todas las animaciones respetan `prefers-reduced-motion`.
- Mobile-first: tipografía, espaciado y layout se adaptan progresivamente desde el diseño móvil.
- Sin dependencias innecesarias: solo Framer Motion y Lucide React además de React/Vite/Tailwind.

## 18. Notas finales

- Ningún dato de clientes, testimonios, proyectos o currículums fue inventado. Todos los campos sensibles están marcados con placeholders `[INSERTAR ...]` listos para reemplazarse.
- El paquete "Business Intelligence" que se muestra en la sección homónima es una **demostración visual**, no un dashboard conectado a datos reales.
