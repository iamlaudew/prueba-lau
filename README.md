# Proyecto: Aplicación de Pokémon

## Descripción del Proyecto

Esta es una aplicación de Pokémon desarrollada utilizando Vite, TypeScript y React. La aplicación implementa el patrón de diseño Container & Presentational Components, haciendo uso de hooks, manejo de props entre componentes y consumo de la PokéAPI con Axios. Además, incluye funcionalidades de manipulación del localStorage y se despliega en GitHub Pages.

## Requerimientos del Proyecto

- Vite como herramienta de construcción.
- npm como manejador de dependencias.
- Patrón de diseño Container & Presentational Components.
- TypeScript para el uso de interfaces y tipado fuerte.
- Hooks (use Effects, useState, useContext).
- Manejo de Props entre componentes.
- Consumo de API con fetch.
- Manipulación del localStorage.
- GitHub Pages para despliegue.
- PokéAPI como fuente de datos.

## Estructura de la Aplicación

1. **Menú de Navegación**: Permite navegar entre diferentes componentes en una misma página.
   
2. **Componente Descriptivo**: Un componente donde se incluye una breve descripción personal (no profesional).

3. **Componente de Pokémon**:
   - **Dropdown**: Lista desplegable con diez nombres de diferentes Pokémon.
   - **Tarjeta de Información**: Componente hijo que muestra información detallada del Pokémon seleccionado, incluyendo:
     - Nombre del Pokémon.
     - Número en la Pokédex.
     - Listado de tipos.
     - Listado de movimientos.
   - **Animación de Carga**: Se muestra una animación de carga usando un spinner.
   - **Actualización del localStorage**: La información se guarda y actualiza en el localStorage cada vez que se selecciona un nuevo Pokémon, y se muestra en la consola del navegador.

## Recursos y Herramientas

- PokéAPI: https://pokeapi.co/
- Guía para GitHub Pages: https://github.com/gitname/react-gh-pages
