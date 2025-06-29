import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
    const projects = [
        {
            title: "Salafi Bot",
            description: "A Salafi Discord Bot for all Your Needs",
            link: "https://github.com/Salafi-Coders/salafibot",
        },
        {
            title: "More coming soon...",
            description: "Stay tuned for more exciting projects from Salafi Coders!",
            link: "/",
        },
        {
            title: "More coming soon...",
            description: "Stay tuned for more exciting projects from Salafi Coders!",
            link: "/",
        },
    ];

    return (
        <div className="projects grid bg-background gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 pb-32">
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