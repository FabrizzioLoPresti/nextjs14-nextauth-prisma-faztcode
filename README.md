This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Project Deployed in Vercel: [Next-Auth Prisma App - Nextjs 14]()

Nextjs 14 Project using:

- Nextjs 14 Features
  - Src and App Folder
  - Import Alias (@)
  - .env.local and .env
  - Metadata
  - Client Side
    - Google Fonts and TailwindCSS
    - Link and Image Componente
    - Layout and Page Structure
    - Client Routes
    - Dynamic Routes ([id] folder)
    - Async GET in page.tsx -> Server Components
    - Suspense React Component
    - Page not-found.tsx, loading.tsx and notFound() Function
    - useRouter(), useParam() and useSearchParams Hooks
    - Revalidate
    - Server Actions
    - Route Groups
  - Server Side
    - API Routes using Route Handlers API
    - params and searchParams in Route Handlers API
    - Client and Server Components ('use client' and 'use server')
    - Server Actions using useFormStatus and useTransition React Hooks from react for Delete Button
- ESLint
- NextAuth
  - Middlewares for Protected Routes
  - Providers for mantain state in the app of the session
  - Prisma DataBase Provider
  - Environment Variables
  - Server Session
- React-Hook-Forms
  - useForm() Hook
  - Form Validation
  - Form State
  - Form Submit
  - Form Reset
  - React-Hook-Form with Server Actions
- Prisma ORM
  - Types from Prisma and PostgreSQL Database
  - Migrate Schemas to PostgreSQL Database
- Bcrypt
  - Hash Passwords
  - Compare Passwords
- Zod

## Order of archivements

1. App -> page.tsx
2. Register -> page.tsx
3. Register User Form Component -> register-user-form.tsx
4. Actions -> actions.ts
5. Register Route Handler -> api/auth/register/route.ts
6. Login -> page.tsx
7. Login User Form Component -> login-user-form.tsx
8. Auth Button Component -> auth-button.tsx
9. Login NextAuth Route Handler -> api/auth/[...nextauth]/route.ts
10. Protected Routes (Dashboard) -> page.tsx
11. Middlewares for Protected Routes -> middleware.ts

### Links Projects

- [FaztCode - Nextjs NextAuth Prisma Login y Registro](https://www.youtube.com/watch?v=iZDK42F2cTc)
- [Nextjs, NextAuth, Radix UI - Autenticacion, CRUD y Despliegue con Typescript](https://www.youtube.com/watch?v=qOAUm_rAE-E)
- [Using React Hook Form, Zod Validation and Server Actions in NextJs 13](https://www.youtube.com/watch?v=R_Pj593TH_Q)
- [Support Server Actions on onSubmit (Next 13)](https://github.com/react-hook-form/react-hook-form/issues/10391)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
