
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-4 pt-10 pb-6 bg-gray-50">
      <h1 className="text-3xl font-bold lalezar-font text-center mb-2">
        کسب‌وکارت رو نخ کن
      </h1>
      <p className="text-center text-gray-700 mb-6 max-w-md vazir-font leading-relaxed">
        اگر نخ از تولید تا پوشاک سیستمی منظم و هوشمند داشته باشه، غوغا میشه
      </p>

      <RegisterForm />

      <footer className="mt-10 text-sm text-center text-gray-500 vazir-font">
        © {new Date().getFullYear()} تمامی حقوق متعلق به پلتفرم نخ‌نت است.
      </footer>
    </main>
  );
}
