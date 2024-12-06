# FFLRecetas

FFLRecetas es una aplicación web que muestra las mejores recetas de comida peruana. Este proyecto está diseñado para consumir datos desde una API personalizada, ofreciendo una experiencia dinámica y sencilla para los usuarios.

## 📋 Estructura del Proyecto

### Archivos Principales

1. **Frontend:**
   - **`index.html`**  
     Contiene la estructura principal de la página.
   - **CSS:**  
     Ubicado en `/public/css/style.css`, define los estilos visuales de la página.
   - **JavaScript:**  
     Ubicado en `/public/js/main.js`, maneja la interacción del frontend con la API y las funcionalidades dinámicas.

2. **Backend/API:**
   - La API se encuentra en un proyecto separado y proporciona los datos de las recetas en formato JSON.
   - Endpoints principales de la API:
     - **`GET /recipes`**: Devuelve todas las recetas.
     - **`GET /recipes/:id`**: Devuelve una receta específica según su ID.

## 🎯 Funcionalidades

1. **Listado de recetas dinámico:**  
   El frontend consume datos desde la API y renderiza las tarjetas de recetas en la página principal.
2. **Ver detalles de recetas:**  
   Cada tarjeta incluye un enlace para ver más información sobre la receta seleccionada.
3. **Diseño adaptable:**  
   El diseño es responsivo y funciona en distintos dispositivos.

## 🛠️ Tecnologías Utilizadas

### Frontend:
- **HTML:** Para la estructura de la página.
- **CSS:** Para estilos personalizados.
- **JavaScript:** Para manejar la lógica y consumir la API.

### Backend:
- **Node js:** Para servir la API.
- **JSON:** Para almacenar y estructurar los datos de las recetas.

## 📌 Pendientes

- Mejorar el diseño del frontend con animaciones y transiciones.
- Implementar filtrado y búsqueda de recetas en el frontend.
- Agregar autenticación básica para el acceso a la API (si es necesario).

## 🏷️ Créditos

- **Autor:** Página de recetas FFL, 2024.