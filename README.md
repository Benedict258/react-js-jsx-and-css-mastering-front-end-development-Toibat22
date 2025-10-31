# Task Manager & API Explorer

A modern, futuristic React application featuring a comprehensive task management system and public API explorer. Built with a sleek black, white, and electric blue aesthetic for a professional, techy feel.

## Overview

This application demonstrates advanced React concepts including state management, custom hooks, context API, and responsive design. It provides two main features:

1. **Task Manager**: A fully-featured task management system with local storage persistence, allowing users to create, complete, filter, and delete tasks with real-time updates.

2. **API Explorer**: An interactive interface to browse and search through public APIs from the PublicAPIs.org database, featuring pagination, search functionality, and detailed API information.

The application supports both light and dark themes with smooth transitions and maintains a consistent, polished UI across all screen sizes.

## Features

- **Task Management**
  - Add, complete, and delete tasks
  - Filter tasks by status (All, Active, Completed)
  - Persistent storage using localStorage
  - Real-time task counter
  - Smooth animations and transitions

- **API Explorer**
  - Browse public APIs from PublicAPIs.org
  - Search functionality across API names and descriptions
  - Pagination with page navigation
  - Display API details (category, authentication, HTTPS support)
  - Loading and error states

- **Theme System**
  - Light and dark mode support
  - Persistent theme preference
  - Smooth theme transitions
  - Electric blue accent color (#00bfff)

- **Responsive Design**
  - Mobile-first approach
  - Breakpoints for mobile, tablet, and desktop
  - Touch-friendly interface
  - Adaptive navigation

## Tech Stack

- **React 19.1.1** - Modern React with hooks and context
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **React Router DOM 7.9.5** - Client-side routing
- **PropTypes 15.8.1** - Runtime type checking
- **ESLint 9.36.0** - Code quality and consistency
- **Custom CSS** - Futuristic styling with CSS variables and animations

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (comes with Node.js) or **pnpm** as package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   Or if using pnpm:
   ```bash
   pnpm install
   ```

## Running the Project

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Production Build

Build the application for production:

```bash
npm run build
```

This creates an optimized build in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── APIList.jsx          # API explorer component
│   │   ├── Button.jsx           # Reusable button component
│   │   ├── Footer.jsx           # Footer component
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── TaskManager.jsx      # Task management component
│   ├── context/
│   │   └── ThemeContext.jsx     # Theme provider and hook
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Global styles and theme
│   └── main.jsx                 # Application entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint configuration
```

## Key Components

### TaskManager
Manages task state with custom `useLocalStorageTasks` hook for persistence. Includes filtering, adding, completing, and deleting tasks.

### APIList
Fetches and displays public APIs with search, pagination, and error handling. Uses React hooks for state management and side effects.

### ThemeContext
Provides global theme state using React Context API, persisting user preferences to localStorage.

### Button
Reusable button component with multiple variants (primary, secondary, danger, success, warning) and sizes (sm, md, lg).

## Design Philosophy

The application follows a minimalist, space-themed aesthetic with:

- **Color Palette**: Black (#0a0a0a), White (#ffffff), Electric Blue (#00bfff)
- **Typography**: System font stack for optimal readability
- **Spacing**: 8px baseline grid for consistency
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG-compliant contrast ratios and keyboard navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Code splitting with React Router
- Lazy loading where applicable
- Optimized re-renders with proper dependency arrays
- CSS animations using GPU acceleration
- Efficient state management

## Contributing

This project is part of a React.js learning assignment. For contributions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is created for educational purposes as part of the PLP React.js course curriculum.

## Acknowledgments

- Public APIs data provided by [PublicAPIs.org](https://publicapis.org)
- React documentation and community
- Vite for the amazing developer experience
