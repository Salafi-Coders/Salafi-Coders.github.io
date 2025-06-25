import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
    const projects = [
        {
            title: "Quran App",
            description: "A modern Quran reading app with tafsir and audio playback.",
            link: "https://quran.salafi-coders.com",
        },
        {
            title: "Islamic Blog",
            description: "A blog platform for sharing Islamic articles and resources.",
            link: "https://blog.salafi-coders.com",
        },
        {
            title: "Prayer Times",
            description: "A web app to display accurate prayer times for any location.",
            link: "https://prayertimes.salafi-coders.com",
        },
    ];

    return (
        <div className="grid bg-background gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
            {projects.map((project) => (
                <Card key={project.title} className="hover:shadow-lg bg-background transition-shadow">
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-gray-600">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="highlighted-text hover:underline font-medium"
                        >
                            Visit Project
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}