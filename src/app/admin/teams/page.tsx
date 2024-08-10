import TeamCard from "~/components/teams/teamcard";

export default function TeamsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <TeamCard />
            <TeamCard />
            <TeamCard />
        </div>
    )
}