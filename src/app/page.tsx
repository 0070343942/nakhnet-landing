import RegisterForm from "../components/RegisterForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-center mb-4 lalezar-font">
          کسب‌وکارت رو نخ کن
        </h1>

        <p className="text-lg text-center text-gray-700 mb-8 max-w-xl vazir-font">
          اگر نخ از تولید تا پوشاک سیستمی منظم و هوشمند داشته باشه، غوغا میشه
        </p>

        <RegisterForm />
      </main>

      <footer className="text-center text-sm text-gray-500 py-4 border-t vazir-font">
        © {new Date().getFullYear()} . تمامی حقوق متعلق به پلتفرم نخ‌نت است.
      </footer>
    </div>
  );
}
