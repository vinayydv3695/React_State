# Smart Text Analyzer

A React-based text analysis tool that provides real-time statistics as users type.

## Features

- **Real-time Analysis**: Live statistics update as you type
- **Character Count**: Total number of characters in the text
- **Word Count**: Total number of words (separated by whitespace)
- **Uppercase Count**: Number of uppercase letters (A-Z)
- **Lowercase Count**: Number of lowercase letters (a-z)
- **Clear Functionality**: Reset the input and all statistics with one click

## Technologies Used

- React 18 with Hooks (useState)
- Vite (Build tool)
- CSS3 for styling

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## How It Works

The application uses React's `useState` hook to manage the text input as controlled state. All statistics are calculated in real-time using:

- `.length` for character count
- `.split(/\s+/)` for word count
- `.match(/[A-Z]/g)` for uppercase letters
- `.match(/[a-z]/g)` for lowercase letters

When the text input is empty, the app displays a message: "Start typing to see analysis..."

## Component Structure

- `App.jsx` - Main application component
- `TextAnalyzer.jsx` - Core text analyzer component with state management
- `TextAnalyzer.css` - Component-specific styles
- `index.css` - Global styles
# React_State
