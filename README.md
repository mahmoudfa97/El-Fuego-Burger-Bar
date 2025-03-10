# El Fuego Burger Bar

![El Fuego Burger Bar](https://placeholder.svg?height=300&width=800&text=El+Fuego+Burger+Bar)

A full-stack Next.js application for a Mexican-themed burger restaurant with bilingual support (English/Spanish), responsive design, and interactive UI components.

## 🌮 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Bilingual Support**: Toggle between English and Spanish with a language switcher
- **Interactive Menu**: Expandable burger cards with detailed information
- **API Integration**: Server-side API routes for fetching burger data
- **Modern UI**: Sleek design with animations and transitions
- **Mobile Navigation**: Slide-out menu for mobile devices

## 🔧 Technologies Used

- **Frontend**:
  - Next.js 14 (App Router)
  - React 18
  - Tailwind CSS
  - shadcn/ui components
  - Lucide React icons

- **Backend**:
  - Next.js API Routes
  - Server Components
  - Server Actions

## 📋 Prerequisites

- Node.js 18.17.0 or later
- npm or yarn
## 🌮 Features
el-fuego-burger-bar/
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   ├── menu/               # Menu page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # UI components (shadcn)
│   ├── burger-card.tsx     # Burger card component
│   ├── footer.tsx          # Footer component
│   ├── header.tsx          # Header component
│   └── language-switcher.tsx # Language switcher component
├── contexts/               # React contexts
│   └── language-context.tsx # Language context for translations
├── lib/                    # Utility functions and data
│   ├── burgers.ts          # Burger data and API functions
│   └── types.ts            # TypeScript types
├── public/                 # Static assets
└── README.md               # Project documentation


## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/mahmoudfa97/el-fuego-burger-bar.git
cd el-fuego-burger-bar

