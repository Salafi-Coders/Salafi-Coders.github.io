import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[40vh] bg-background px-4 py-16  text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                Welcome to Salafi Coders
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Empowering developers with modern tools, resources, and a supportive community.
            </p>
            <Button size="lg" className="px-8">
                Get Started
            </Button>
        </section>
    );
}