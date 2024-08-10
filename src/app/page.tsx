import Image from 'next/image'
export default function Home () {
  return (
    <div className="flex items-center justify-center h-screen ">
        <div className="text-center">
            <div className="w-lvw h-32 mx-auto mb-8">
                <Image
                    src="/brand/icono_texto.png"
                    alt="Coming Soon"
                    layout="fill"
                    objectFit="contain"
                    priority
                />
            </div>
        </div>
    </div>
  )
}