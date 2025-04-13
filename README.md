# Revia - AI-Powered Document Processing Platform

Revia is a modern web application built with Next.js that leverages AI to process and analyze documents. It features a beautiful, responsive UI with dark mode support and sophisticated animations.

## Features

- **Modern UI/UX**
  - Responsive design
  - Dark mode support
  - Smooth animations with Framer Motion
  - Accessible components with Headless UI and Radix UI

- **AI Integration**
  - Document processing and analysis
  - Natural language understanding
  - Real-time AI-powered insights

- **Authentication & Database**
  - Secure user authentication
  - Real-time data synchronization
  - Robust data storage

- **Communication**
  - Email notifications
  - Chat functionality
  - Real-time updates

## Tech Stack

- **Frontend**
  - Next.js 14
  - React 18
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Headless UI
  - Radix UI

- **Backend**
  - Supabase
  - OpenAI
  - SendGrid
  - Twilio

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/revia.git
   cd revia
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env.local` file with the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   OPENAI_API_KEY=your_openai_key
   SENDGRID_API_KEY=your_sendgrid_key
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for deployment on Vercel. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure

```
revia/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (auth)/            # Authentication routes
│   ├── dashboard/         # Dashboard pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── features/         # Feature-specific components
├── lib/                  # Utility functions
├── styles/              # Global styles
└── types/               # TypeScript types
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Supabase for the backend infrastructure
- OpenAI for the AI capabilities
- All contributors and maintainers 