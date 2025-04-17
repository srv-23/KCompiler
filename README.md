# KCompiler

A modern web-based code compiler and editor built with Next.js, TypeScript, and Convex.

## Features

- 🚀 Modern code editor using Monaco Editor
- 🔐 Secure authentication with Clerk
- 💾 Real-time data storage with Convex
- 🎨 Beautiful UI with Tailwind CSS and Framer Motion
- 📝 Syntax highlighting for multiple languages
- 🔄 Real-time collaboration features

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Backend**: Convex
- **Code Editor**: Monaco Editor
- **State Management**: Zustand
- **Animations**: Framer Motion
- **UI Components**: Lucide React
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Convex account
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd kcompiler
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CONVEX_URL=your_convex_url
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
kcompiler/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   ├── hooks/         # Custom React hooks
│   ├── store/         # Zustand state management
│   └── types/         # TypeScript type definitions
├── convex/            # Convex backend code
├── public/            # Static assets
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Convex for the real-time backend
- Clerk for authentication
- Monaco Editor for the code editing experience
