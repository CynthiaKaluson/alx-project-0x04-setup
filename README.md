# StateCraft: Mastering State Management with Redux & Context API

## 🚀 Project Overview

**StateCraft** is a comprehensive learning project series that demonstrates progressive state management implementations in React applications. Built with **Next.js** and **TypeScript**, this project takes you on a journey from basic local state management to sophisticated global state solutions through an interactive counter application.

## 📚 Learning Journey

### Phase 1: Local State (useState) - `alx-project-0x04`
- Master React's built-in `useState` hook
- Implement component-level state management
- Understand local state patterns and limitations

### Phase 2: Global State (Context API) - `alx-project-0x05`  
- Implement React Context API for global state
- Eliminate prop drilling across components
- Share state between Header and Counter components
- Learn context provider patterns

### Phase 3: Enterprise State (Redux Toolkit) - `alx-project-0x06`
- Set up Redux store with TypeScript
- Implement slices and reducers
- Use Redux DevTools for debugging
- Master scalable state architecture

## 🎯 Key Features

- **Interactive Counter App** with engaging UI and animations
- **Real-time State Sync** across multiple components
- **TypeScript Integration** for full type safety
- **Responsive Design** with Tailwind CSS
- **Three Implementation Approaches** for comparative learning

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: 
  - React useState (Task 0)
  - Context API (Task 1)  
  - Redux Toolkit (Task 2)
- **Development**: Hot reloading, ESLint, TypeScript compiler

## 📁 Project Structure
alx-project-0x04-setup/
├── alx-project-0x04/ # useState Implementation
│ ├── pages/
│ │ ├── counter-app.tsx # Local state with useState
│ │ └── index.tsx
│ └── package.json
├── alx-project-0x05/ # Context API Implementation
│ ├── context/
│ │ └── CountContext.tsx # Context provider and hooks
│ ├── components/
│ │ └── layouts/
│ │ └── Header.tsx # Header with context access
│ ├── pages/
│ │ ├── counter-app.tsx # Uses context instead of useState
│ │ ├── index.tsx
│ │ └── _app.tsx # Wrapped with CountProvider
│ └── package.json
├── alx-project-0x06/ # Redux Implementation
│ ├── store/
│ │ └── store.ts # Redux store configuration
│ ├── components/
│ │ └── layouts/
│ │ └── Header.tsx # Header with Redux access
│ ├── pages/
│ │ ├── counter-app.tsx # Uses Redux hooks
│ │ ├── index.tsx
│ │ └── _app.tsx # Wrapped with Redux Provider
│ └── package.json
└── README.md

text

## 🎓 Learning Objectives

By completing this project series, you will:

- ✅ Understand fundamental React state management using `useState`
- ✅ Implement global state management with Context API
- ✅ Master Redux for complex state management scenarios  
- ✅ Compare different state management solutions
- ✅ Implement state persistence across components
- ✅ Understand the concept of single source of truth
- ✅ Structure applications for scalable state management

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn package manager
- Modern web browser

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/CynthiaKaluson/alx-project-0x04-setup.git
   cd alx-project-0x04-setup
Navigate to each project

bash
# Project 1 - useState (Task 0)
cd alx-project-0x04
npm install
npm run dev

# Project 2 - Context API (Task 1)  
cd ../alx-project-0x05
npm install
npm run dev

# Project 3 - Redux (Task 2)
cd ../alx-project-0x06
npm install
npm run dev
Access the application

Open http://localhost:3000 in your browser

Click "Counter App" to navigate to the interactive counter

Test increment/decrement functionality

Observe state synchronization in the header

🔧 Development
Each project is self-contained with its own implementation:

Project 1: useState (alx-project-0x04)
Simple local state management

Perfect for understanding React fundamentals

No external dependencies beyond React

Project 2: Context API (alx-project-0x05)
Global state with React Context

Custom hooks for context consumption

Provider pattern implementation

Project 3: Redux (alx-project-0x06)
Redux Toolkit setup

Store configuration with TypeScript

Slice-based state management

React-Redux hooks integration

📖 Best Practices Implemented
General React Practices
Component organization and separation of concerns

TypeScript for type safety

Immutable state updates

Single responsibility principle

State Management Specific
Context API: Proper provider levels and custom hooks

Redux: RTK patterns, typed store, and slice organization

Performance: Memoization and optimized re-renders

🎯 Expected Outcomes
After completing all three implementations, you'll have:

Working counter application with three state management approaches

Deep understanding of when to use each solution

Practical experience with modern React patterns

Foundation for building complex stateful applications

Informed decision-making skills for state management choices

🤝 Contributing
This is a learning project. Feel free to:

Experiment with different state management approaches

Add new features to the counter app

Implement additional state management libraries

Share your learnings and improvements

📄 License
This project is part of the ALX curriculum and is intended for educational purposes.

Happy coding! 🚀 Explore the evolution of state management and master the art of building scalable React applications.

Note: This project emphasizes hands-on learning. Type the code yourself to internalize the concepts and patterns!