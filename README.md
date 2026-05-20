# Comilla University Website

A modern, professional university website for Comilla University, Bangladesh.

## Features

- Modern React frontend with TypeScript
- Express.js backend with TypeScript
- Responsive design with Tailwind CSS
- News and announcements sections
- Department information
- Image gallery
- Vice Chancellor message
- Statistics section
- And more...

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite
- **UI Components**: Radix UI

## Project Structure

```
ComillaUniWeb/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── data/
│   └── public/
├── server/                # Express backend
│   ├── app.ts
│   ├── routes.ts
│   └── storage.ts
├── shared/                # Shared types and schema
│   └── schema.ts
├── attached_assets/       # Images and media
└── dist/                  # Build output
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (if using database instead of in-memory storage)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ComillaUniWeb.git
   cd ComillaUniWeb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Application

1. Development mode:
   ```bash
   npm run dev
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Run in production mode:
   ```bash
   npm start
   ```

The application will be available at http://localhost:5000

## Database

The application currently uses in-memory storage with seed data. To use a PostgreSQL database:

1. Set up a PostgreSQL database
2. Set the DATABASE_URL environment variable
3. Run database migrations:
   ```bash
   npm run db:push
   ```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please contact [your-email@example.com]
