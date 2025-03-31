# Modverse - AI Module Marketplace

A modern, responsive website for Modverse, an AI module marketplace platform.

## Features

- Responsive design
- Interactive background effects
- Bilingual support (English/Chinese)
- Contact form
- Team showcase
- MVP display
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modverse.git
cd modverse
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure your custom domain in Vercel
4. Deploy!

### Option 2: Static Export

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out` directory
3. Deploy the contents of the `out` directory to your hosting service

### Option 3: Traditional Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 