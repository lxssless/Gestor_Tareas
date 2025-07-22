# Gestor de Tareas

## 📌 Descripción del Proyecto

Gestor de Tareas es una aplicación web desarrollada con Angular que permite a los usuarios gestionar sus tareas de forma eficiente. La aplicación permite registrar usuarios, iniciar sesión, añadir, editar y eliminar tareas. Todos los datos se almacenan en Firebase Firestore.

## 🛠️ Tecnologías y Herramientas Utilizadas

- Angular
- TypeScript
- Firebase (Authentication y Firestore)
- Tailwind CSS
- Node.js
- PNPM

## 📦 Requisitos para Instalar y Ejecutar

1. Tener instalado [Node.js](https://nodejs.org/)
2. Tener instalado [PNPM](https://pnpm.io/):
   ```bash
   npm install -g pnpm
   ```
3. Clonar el repositorio:
   ```bash
   git clone <https://github.com/lxssless/Gestor_Tareas>
   cd Gestor_Tareas
   ```
4. Instalar dependencias:
   ```bash
   pnpm install
   ```
5. Ejecutar el servidor de desarrollo:
   ```bash
   ng serve
   ```

## 🏗️ Arquitectura del Proyecto

El proyecto está organizado en los siguientes componentes y servicios principales:

### 🧩 Componentes

- `InicioComponent`: Página principal con opciones de navegación.
- `LoginComponent`: Formulario para autenticación de usuarios.
- `RegistroComponent`: Formulario de registro de nuevos usuarios.
- `TareasComponent`: Lista y gestión de tareas del usuario.
- `NavbarComponent`: Barra de navegación.

### 🧪 Servicios

- `AuthService`: Maneja el login, logout y registro con Firebase Authentication.
- `TareaService`: CRUD de tareas conectadas a Firebase Firestore.
- `AuthGuard`: Protege las rutas privadas que solo deben ser accesibles con sesión activa.

## 🚀 Firebase Hosting

La aplicación está desplegada en Firebase Hosting en la siguiente URL:

👉 

## 🎥 Video de Demostración

Puedes ver una demostración de la aplicación, sus funcionalidades y el código explicativo en el siguiente video:

👉 

---

📬 Para cualquier duda o sugerencia, no dudes en comunicarte.
