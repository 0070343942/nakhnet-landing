import RegisterForm from "../components/RegisterForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
           <h1 className="text-4xl font-bold text-center mb-4">کسب‌وکارت رو نخ کن 🌱</h1>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-xl">
        اگر بخشی از زنجیره صنعت پارچه تا پوشاک هستی، همین حالا در پلتفرم نوآورانه نخ‌نت ثبت‌نام کن.
      </p>
      <RegisterForm />
    </main>
  );
}
