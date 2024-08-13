export default function RegisterForm() {
  return (
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
  )
}