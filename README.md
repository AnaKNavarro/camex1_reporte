# CAMEX-1 | Reporte de Actividades AMEA

Sitio web del reporte de la primera campaña científica mexicana en la Antártida.

## 📁 Estructura del Proyecto

```
camex1_reporte/
├── index.html              # Página principal con efecto de scroll hero
├── CAMEX1_Reporte.html     # Archivo HTML original (backup)
├── css/
│   └── styles.css          # Todos los estilos del sitio
├── js/
│   └── main.js             # JavaScript para interactividad y efectos
├── images/                 # Carpeta para imágenes y videos
│   ├── hero/               # Imagen/video principal
│   ├── galeria/            # Fotos de la expedición
│   ├── equipo/             # Fotos del equipo
│   ├── logos/              # Logos institucionales
│   └── README.md           # Guía de uso de imágenes
└── README.md               # Este archivo
```

## ✨ Características Principales

### Efecto Hero con Scroll
El sitio incluye un efecto de scroll inspirado en el sitio web del Nordiska Museet:
- **Parallax**: El contenido del hero se desvanece al hacer scroll
- **Animaciones**: Elementos que aparecen con fade-in secuencial
- **Indicador de scroll**: Flecha animada que invita a explorar

### Diseño Modular
- **CSS separado**: Todos los estilos en `css/styles.css`
- **JavaScript separado**: Funcionalidad en `js/main.js`
- **Fácil mantenimiento**: Código organizado y comentado

### Responsive
- Adaptable a todos los tamaños de pantalla
- Optimizado para móviles, tablets y desktop

## 🚀 Cómo Usar

1. **Abrir el sitio**: Simplemente abre `index.html` en tu navegador
2. **Agregar imágenes**: Coloca tus imágenes en la carpeta `images/` siguiendo la estructura sugerida
3. **Personalizar**: Edita los archivos según necesites:
   - `index.html` - Contenido
   - `css/styles.css` - Estilos
   - `js/main.js` - Funcionalidad

## 📸 Agregar Imágenes

Para reemplazar los placeholders con imágenes reales:

1. Coloca tus imágenes en `images/galeria/`
2. En `index.html`, busca los elementos con clase `photo-placeholder`
3. Reemplaza con:
```html
<img src="images/galeria/nombre-imagen.jpg" alt="Descripción">
```

## 🎨 Paleta de Colores

- **Navy**: `#0A2A4D` - Color principal
- **Ice Blue**: `#A7CCE9` - Acentos
- **Sage**: `#A9CBB7` - Detalles
- **Sky**: `#81B3D2` - Enlaces
- **Frost**: `#E5F1FA` - Fondos claros

## 🔧 Tecnologías

- HTML5
- CSS3 (con CSS Variables)
- JavaScript (Vanilla)
- Google Fonts (Montserrat, Lato)

## 📝 Notas

- El archivo `CAMEX1_Reporte.html` es el original y se mantiene como backup
- El nuevo `index.html` tiene la misma estructura pero con mejor organización
- Todos los estilos y scripts están externalizados para mejor mantenimiento

## 🌟 Efecto de Scroll Hero

El efecto principal se activa automáticamente al cargar la página:
- El fondo y contenido del hero se desvanecen al hacer scroll
- Efecto parallax suave en el contenido
- Transición fluida hacia el contenido principal

---

**AMEA** · Agencia Mexicana de Estudios Antárticos  
Colaboración Ucrania–México · 2025–2026
