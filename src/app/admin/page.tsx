import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="card glass w-96">
          <figure>
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="car!"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="mockup-browser bg-base-300 border">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
        </div>
        <img
            className="mask mask-squircle"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>


        <div className="w-full max-w-sm mx-auto p-8  shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <form action="#">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter your name" className="input input-bordered w-full"/>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Enter your email" className="input input-bordered w-full"/>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter your password" className="input input-bordered w-full"/>
            </div>
            <div className="form-control mb-4">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input type="checkbox" className="checkbox checkbox-primary"/>
              </label>
            </div>
            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">Register</button>
            </div>
          </form>
        </div>
      </div>


    </main>
  );
}
