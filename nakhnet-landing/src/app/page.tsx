
import RegisterForm from './RegisterForm';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold lalezar-font mb-4 text-center">کسب‌وکارت رو نخ کن</h1>
      <p className="text-gray-600 mb-8 text-center">اگر نخ از تولید تا پوشاک سیستمی منظم و هوشمند داشته باشه، غوغا میشه</p>
      <RegisterForm />
      <footer className="mt-12 text-sm text-gray-500 text-center">© 2025 تمامی حقوق متعلق به پلتفرم نخ‌نت است.</footer>
    </main>
  );
}
