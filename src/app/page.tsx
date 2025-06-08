import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold lalezar-font mb-2">کسب‌وکارت رو نخ کن</h1>
      <p className="text-center mb-4">اگر نخ از تولید تا پوشاک سیستمی منظم و هوشمند داشته باشه، غوغا میشه</p>
      <RegisterForm />
      <footer className="mt-10 text-sm text-center text-gray-600">
        © 2025 تمامی حقوق متعلق به پلتفرم نخ‌نت است.
      </footer>
    </main>
  );
}