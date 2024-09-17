import TeamCard from "~/components/teams/teamcard";

type Player = {
    number: number;
    firstName: string;
    lastName: string;
    image: string;
    status: 'Active' | 'Injured'; // Restricting status to these two values
    stats: {
        points: number;
        assists: number;
        rebounds: number;
    };
};

const generateRandomPlayer = (team: string, i: number): Player => ({
    number: i + 1,
    firstName: `FirstName${i + 1}`,
    lastName: `LastName${i + 1}`,
    image: `https://picsum.photos/seed/${team}${i + 1}/50/50`,
    status: i % 5 === 0 ? 'Injured' : 'Active', // Status is now type-safe
    stats: {
        points: Math.floor(Math.random() * 30),
        assists: Math.floor(Math.random() * 10),
        rebounds: Math.floor(Math.random() * 15),
    },
});

const teams = [
    {
        name: 'Femenino',
        injured: 2,
        active: 13,
        players: Array.from({ length: 15 }, (_, i) =>
            generateRandomPlayer('femenino', i)
        ),
    },
    {
        name: 'Rojo',
        injured: 1,
        active: 14,
        players: Array.from({ length: 15 }, (_, i) =>
            generateRandomPlayer('rojo', i)
        ),
    },
    {
        name: 'Negro',
        injured: 3,
        active: 12,
        players: Array.from({ length: 15 }, (_, i) =>
            generateRandomPlayer('negro', i)
        ),
    },
];

const TeamsPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Equipos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teams.map((team) => (
                    <TeamCard
                        key={team.name}
                        teamName={team.name}
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
