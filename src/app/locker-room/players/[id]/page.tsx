import { notFound } from 'next/navigation';
import Image from 'next/image';
import InfoCard from '~/components/teams/infocard'; // Import the InfoCard component

interface PlayerData {
    id: string;
    number: number;
    firstName: string;
    lastName: string;
    image: string;
    coverImage: string;
    status: 'Active' | 'Injured';
    stats: {
        points: number;
        assists: number;
        rebounds: number;
    };
    bio: string;
    highlights: string[];
    personalData: {
        age: number;
        birthDate: string;
        height: string;
        weight: string;
        position: string;
    };
    contactInfo: {
        phone: string;
        email: string;
        address: string;
    };
    healthData: {
        bloodType: string;
        allergies: string[];
        medicalConditions: string[];
    };
    emergencyContact: {
        name: string;
        relationship: string;
        phone: string;
    };
}

// Mock function to simulate fetching player data
async function getPlayerData(id: string) {
    const playerData: PlayerData = {
        id,
        number: Number(id),
        firstName: 'John',
        lastName: 'Doe',
        image: `https://picsum.photos/seed/player${id}/150/150`,
        coverImage: `https://picsum.photos/seed/cover${id}/800/300`,
        status: 'Active',
        stats: {
            points: 25,
            assists: 7,
            rebounds: 12,
        },
        bio: 'A passionate basketball player with a love for the game.',
        highlights: [
            `https://picsum.photos/seed/highlight${id}-1/300/300`,
            `https://picsum.photos/seed/highlight${id}-2/300/300`,
            `https://picsum.photos/seed/highlight${id}-3/300/300`,
            `https://picsum.photos/seed/highlight${id}-4/300/300`,
        ],
        personalData: {
            age: 28,
            birthDate:"1993-01-01",
            height: '6\'4" (193 cm)',
            weight: '220 lbs (100 kg)',
            position: 'Guard',
        },
        contactInfo: {
            phone: '+1 234 567 890',
            email: 'john.doe@example.com',
            address: '1234 Main St, Anytown, USA',
        },
        healthData: {
            bloodType: 'O+',
            allergies: ['Peanuts', 'Shellfish'],
            medicalConditions: ['Asthma'],
        },
        emergencyContact: {
            name: 'Jane Doe',
            relationship: 'Wife',
            phone: '+1 987 654 321',
        },
    };

    if (!playerData) {
        return null;
    }

    return playerData;
}

export default async function PlayerProfile({ params }: { params: { id: string } }) {
    const playerData = await getPlayerData(params.id);

    if (!playerData) {
        notFound();
    }

    return (
        <div className="mx-0">
            {/* Cover Image */}
            <div className="relative mx-0">
                <Image
                    src={playerData.coverImage}
                    alt="Cover Image"
                    width={1800}
                    height={300}
                    className="w-full h-64 object-cover"
                />
                {/* Profile Picture */}
                <div className="absolute bottom-[-64px] left-1/2 transform -translate-x-1/2">
                    <div className="w-50 h-50 rounded-full border-4 border-white">
                        <Image
                            src={playerData.image}
                            alt={`${playerData.firstName} ${playerData.lastName}`}
                            width={128}
                            height={128}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="mt-16 text-center">
                <h1 className="text-3xl font-bold">
                    {playerData.firstName} {playerData.lastName}
                </h1>
                <p className="text-gray-600">{playerData.bio}</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <span className="badge badge-info">Points: {playerData.stats.points}</span>
                    <span className="badge badge-success">Assists: {playerData.stats.assists}</span>
                    <span className="badge badge-warning">Rebounds: {playerData.stats.rebounds}</span>
                    <span
                        className={`badge ${
                            playerData.status === 'Active' ? 'badge-success' : 'badge-error'
                        }`}
                    >
            {playerData.status}
          </span>
                </div>
            </div>

            {/* Cards in a Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-8 mx-3">
                <InfoCard
                    title="📝 Datos personales"
                    content={[
                        `Nacimiento: ${playerData.personalData.birthDate}`,
                        `Edad: ${playerData.personalData.age}`,
                        `Estatura: ${playerData.personalData.height}`,
                        `Peso: ${playerData.personalData.weight}`,
                        `Posición: ${playerData.personalData.position}`,
                    ]}
                />
                <InfoCard
                    title="📞 Información de contacto"
                    content={[
                        `Teléfono: ${playerData.contactInfo.phone}`,
                        `Email: ${playerData.contactInfo.email}`,
                        `Dirección: ${playerData.contactInfo.address}`,
                    ]}
                />
                <InfoCard
                    title="🩺 Datos médicos"
                    content={[
                        `Tipo de sangre: ${playerData.healthData.bloodType}`,
                        `Alergias: ${playerData.healthData.allergies.join(', ')}`,
                        `Condiciones médicas: ${playerData.healthData.medicalConditions.join(', ')}`,
                    ]}
                />
                <InfoCard
                    title="⚠️ Contacto de emergencia"
                    content={[
                        `Nombre: ${playerData.emergencyContact.name}`,
                        `Relación: ${playerData.emergencyContact.relationship}`,
                        `Teléfono: ${playerData.emergencyContact.phone}`,
                    ]}
                />
            </div>

            {/* Gallery Section */}
            <div className="mt-8 mx-3">
                <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {playerData.highlights.map((highlight, index) => (
                        <div key={index} className="aspect-w-1 aspect-h-1">
                            <Image
                                src={highlight}
                                alt={`Highlight ${index + 1}`}
                                layout="responsive"
                                width={300}
                                height={300}
                                className="object-cover rounded"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
