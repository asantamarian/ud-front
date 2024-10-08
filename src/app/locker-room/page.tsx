import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <div className="min-h-screen bg-base-200">
        <div className="hero bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <Image
                  src="/brand/logo.png"
                  alt="Unión Dragones Logo"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
              />
              <h1 className="text-5xl font-bold text-primary">Unión Dragones</h1>
              <p className="py-6 text-xl">Te damos la bienvenida!</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/locker-room/teams" className="card bg-primary text-primary-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">Equipos</h2>
                <p>Nuestros equipos</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary">Ver</button>
                </div>
              </div>
            </Link>

            <Link href="/locker-room/playbook" className="card bg-secondary text-secondary-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">Playbook</h2>
                <p>Jugadas y estrategia</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Ver</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
  )
}