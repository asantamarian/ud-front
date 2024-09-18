'use client';
import { useEffect, useState } from 'react';
import TeamCard from "~/components/teams/teamcard";
import pb from "~/lib/pocketbase";

const TeamsPage: React.FC = () => {
    const [teams, setTeams] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    interface Player {
        number: number;
        firstName: string;
        lastName: string;
        image: string;
        status: 'Active' | 'Injured';
        stats: {
            points: number;
            assists: number;
            rebounds: number;
        };
    }

    interface TeamCardProps {
        teamName: string;
        teamLogo: string;
        activePlayers: number;
        injuredPlayers: number;
        players: Player[];
    }

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                // Fetch teams from PocketBase and expand players
                const response = await pb.collection('teams').getFullList({ expand: 'players' ,requestKey: null});
console.log(response);
                // Map the response to extract team and player informa
                const mappedTeams = response.map((team: any) => {
                    return {
                        name: team.name,
                        logo: `${pb.baseUrl}/api/files/${team.collectionId}/${team.id}/${team.logo}`, // Construct team logo URL
                        injured: team.expand.players.filter((player: any) => player.injured).length,
                        active: team.expand.players.filter((player: any) => !player.injured).length,
                        players: team.expand.players.map((player: any) => ({
                            number: player.number,
                            firstName: player.name,
                            lastName: player.lastName,
                            image: `${pb.baseUrl}/api/files/${player.collectionId}/${player.id}/${player.profile_pic}`, // Construct player image URL
                            status: player.injured ? 'Injured' : 'Active'
                        })),
                    };
                });

                setTeams(mappedTeams); // Set the teams data to state
            } catch (error) {
                console.error('Error fetching teams:', error);
            } finally {
                setLoading(false);
            }
        };

      void fetchTeams(); // Call the function inside useEffect
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Equipos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teams.map((team) => (
                    <TeamCard
                        key={team.name}
                        teamName={team.name}
                        teamLogo={team.logo}
                        activePlayers={team.active}
                        injuredPlayers={team.injured}
                        players={team.players}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamsPage;
