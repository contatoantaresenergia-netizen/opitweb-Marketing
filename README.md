# 🚀 Opitweb - Agencia de Marketing Digital Barcelona

Sitio web institucional desarrollado con **React + Vite** y optimizado para rendimiento y SEO.

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool ultra rápido
- **Lucide React** - Iconos modernos
- **CSS Modules** - Estilos modulares
- **Vercel** - Despliegue y hosting

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/opitweb.git

# Entrar al directorio
cd opitweb

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🚀 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Sube tu proyecto a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Opitweb"
git branch -M main
git remote add origin https://github.com/tu-usuario/opitweb.git
git push -u origin main
```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Vite
   - Haz clic en "Deploy"

### Opción 2: CLI de Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel

# Desplegar en producción
vercel --prod
```

## 📁 Estructura del Proyecto

```
opitweb/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── OpitwebSite.jsx    # Componente principal
│   ├── App.jsx                 # App wrapper
│   ├── main.jsx                # Entry point
│   └── index.css               # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ✨ Características

- ✅ Diseño moderno con gradientes púrpura y azul
- ✅ Animaciones fluidas y efectos hover
- ✅ Totalmente responsive (mobile-first)
- ✅ SEO optimizado con meta tags
- ✅ Performance optimizado
- ✅ Hero section con elementos flotantes
- ✅ Sección de servicios con cards interactivas
- ✅ Tabla de precios (3 planes)
- ✅ Footer completo con redes sociales

## 🎨 Personalización

### Colores

Los colores principales están definidos en `src/index.css`:

```css
:root {
  --purple-primary: #8b5cf6;
  --purple-dark: #6d28d9;
  --blue-primary: #3b82f6;
  --pink-accent: #ec4899;
}
```

### Contenido

Edita el contenido en `src/components/OpitwebSite.jsx`

## 📊 SEO

El sitio incluye:
- Meta tags optimizados
- Open Graph para redes sociales
- Headings semánticos (H1, H2, H3)
- URLs amigables
- Velocidad de carga optimizada

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

## 📱 Responsive

El sitio es completamente responsive con breakpoints en:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deploy URL

Una vez desplegado en Vercel, tu sitio estará disponible en:
```
https://opitweb.vercel.app
```

## 📝 Notas

- El sitio usa animaciones CSS puras (no GSAP en esta versión)
- Optimizado para Lighthouse score > 90
- Compatible con todos los navegadores modernos
- Sin dependencias pesadas

## 🤝 Contribuir

Si deseas contribuir al proyecto:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Opitweb - Barcelona, España.

---

Desarrollado con ❤️ en Barcelona | © 2026 Opitweb
