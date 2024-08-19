interface InfoCardProps {
    title: string;
    content: string[]; // Array of strings representing the list items
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
    return (
        <div className="card bg-base-100 shadow-xl mt-8">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <ul className="list-disc list-inside">
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfoCard;
