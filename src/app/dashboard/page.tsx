// import { redirect } from 'next/navigation';
// import { getServerSession } from 'next-auth';

type Props = {};

export default async function DashboardPage({}: Props) {
  // const session = await getServerSession();
  // if (!session) {
  //   return redirect('/auth/login');
  // }

  return (
    <section className="mx-auto max-w-7xl h-screen flex flex-col items-center justify-center">
      <h1>Dashboard Page</h1>
    </section>
  );
}
