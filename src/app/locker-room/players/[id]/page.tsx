'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import InfoCard from '~/components/teams/infocard';
import pb from '~/lib/pocketbase'; // PocketBase instance

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

export default function PlayerProfile({ params }: { params: { id: string } }) {
    const [playerData, setPlayerData] = useState<PlayerData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPlayerData(id: string) {
            try {
                const response = await pb.collection('players').getOne(id, { requestKey: null });

                const playerData: PlayerData = {
                    id: response.id,
                    number: response.number || 0,
                    firstName: response.name || 'Unknown',
                    lastName: response.lastName || 'Unknown',
                    image:response.profile_pic ? `${pb.baseUrl}/api/files/${response.collectionId}/${response.id}/${response.profile_pic}` : `https://picsum.photos/seed/player${id}/150/150`, // Adjust image path
                    coverImage: `https://picsum.photos/seed/cover${id}/800/300`, // Adjust as necessary
                    status: response.injured ? 'Injured' : 'Active',
                    stats: {
                        points: response.tot_points || 0,
                        assists: response.tot_assists || 0,
                        rebounds: response.tot_rebounds || 0,
                    },
                    bio: response.bio || '',
                    highlights: [
                        `https://picsum.photos/seed/highlight${id}-1/300/300`,
                        `https://picsum.photos/seed/highlight${id}-2/300/300`,
                    ],
                    personalData: {
                        age: response.birthDate ? calculateAge(response.birthDate) : 0,
                        birthDate: response.birthDate || '',
                        height: response.height ? `${response.height} cm` : 'Unknown',
                        weight: response.weight ? `${response.weight} kg` : 'Unknown',
                        position: response.position || 'Unknown',
                    },
                    contactInfo: {
                        phone: response.phone_number ? `${response.phone_number}` : 'Unknown',
                        email: response.email || 'Unknown',
                        address: response.address || 'Unknown',
                    },
                    healthData: {
                        bloodType: 'Unknown',
                        allergies: response.allergies ? response.allergies.split(',') : [],
                        medicalConditions: response.conditions ? response.conditions.split(',') : [],
                    },
                    emergencyContact: {
                        name: response.emergency_name || 'Unknown',
                        relationship: response.emergency_relation || 'Unknown',
                        phone: response.emergency_number ? `${response.emergency_number}` : 'Unknown',
                    },
                };

                setPlayerData(playerData);
            } catch (error) {
                console.error('Error fetching player data:', error);
                setPlayerData(null);
            } finally {
                setLoading(false);
            }
        }

        void fetchPlayerData(params.id);
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!playerData) {
        return <div>Player not found</div>;
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
                            width={150}
                            height={250}
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

// Helper function to calculate age from birthdate
function calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}
