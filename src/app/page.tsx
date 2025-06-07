import RegisterForm from "../components/RegisterForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
     <h1 className="text-4xl font-bold text-center mb-4 lalezar-font">کسب‌وکارت رو نخ کن</h1>

<p className="text-lg text-center text-gray-400 mb-8 max-w-xl vazir-font">
  اگر نخ از تولید تا پوشاک سیستمی منظم و هوشمند داشته باشه، غوغا میشه
</p>
<footer className="text-center text-sm text-gray-500 py-4 border-t mt-16">
  © {new Date().getFullYear()} .تمامی حقوق متعلق به پلتفرم نخ‌نت است
</footer>

      <RegisterForm />
    </main>
  );
}
