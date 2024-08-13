import Link from "next/link";
import RegisterForm from "~/components/register/register";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">

        <div className="mockup-browser bg-base-300 border">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="bg-base-200 flex justify-center px-4 py-16">Algo irá acá ....</div>
        </div>



      </div>


    </main>
  );
}
