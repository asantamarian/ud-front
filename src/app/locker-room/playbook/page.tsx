'use client'

import { useState, useEffect } from 'react'
import pb from "~/lib/pocketbase";
import VideoPlayer from "~/components/video/VideoPlayer";

interface Play {
    id: string
    name: string
    video: string
    description: string
    works_best: string
    created: string
    updated: string
}

export default function PlayList() {
    const [plays, setPlays] = useState<Play[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPlays = async () => {
            try {

                const records = await pb.collection('plays').getFullList<Play>({requestKey: null})
                setPlays(records)
                setLoading(false)
            } catch (err) {
                setError('Failed to fetch plays')
                setLoading(false)
            }
        }

        void fetchPlays()
    }, [])

    if (loading) {
        return <div className="text-center">Loading...</div>
    }

    if (error) {
        return <div className="text-center text-error">{error}</div>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Plays</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plays.map((play) => (
                        <div key={play.id} className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{play.name}</h2>
                                <p>{play.description}</p>
                                <div className="badge badge-secondary">{play.works_best}</div>
                                <div className="card-actions justify-end mt-4">
                                    <VideoPlayer url={play.video} />
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    )
}