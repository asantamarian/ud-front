import Image from 'next/image';
import Link from 'next/link';

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
    activePlayers: number;
    injuredPlayers: number;
    players: Player[];
}

const TeamCard: React.FC<TeamCardProps> = ({
                                               teamName,
                                               activePlayers,
                                               injuredPlayers,
                                               players,
                                           }) => {
    return (
        <div className="card bg-base-100 shadow-xl h-128 overflow-hidden">
            <div className="card-body p-4">
                <h2 className="card-title text-lg">{teamName}</h2>
                <div className="stats shadow mb-2">
                    <div className="stat">
                        <div className="stat-title">Active</div>
                        <div className="stat-value text-green-600 text-md">
                            {activePlayers}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Injured</div>
                        <div className="stat-value text-red-600 text-md">
                            {injuredPlayers}
                        </div>
                    </div>
                </div>
                <ul className="overflow-y-auto h-80">
                    {players.map((player, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <Link href={`/locker-room/players/${player.number}`} className="flex items-center">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <Image
                                            src={player.image}
                                            alt={`${player.firstName} ${player.lastName}`}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="ml-3">
                  <span className="text-sm font-semibold">
                    {player.number}. {player.firstName} {player.lastName}
                  </span>
                                    <span
                                        className={`ml-2 badge ${
                                            player.status === 'Active'
                                                ? 'badge-success'
                                                : 'badge-error'
                                        }`}
                                    >
                    {player.status}
                  </span>
                                    <div className="text-xs mt-1">
                                        <p>Points: {player.stats.points}</p>
                                        <p>Assists: {player.stats.assists}</p>
                                        <p>Rebounds: {player.stats.rebounds}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TeamCard;
