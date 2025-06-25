import { Button } from "@/components/ui/button";

export default function About () {
    return (
        <section className="max-w-4xl mx-auto py-12 px-4">
            <div className="bg-background rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4  ">About Us</h2>
                    <p className=" mb-6">
                        Welcome to Salafi Coders! We are a passionate community of developers dedicated to building high-quality, open-source projects with a focus on learning and collaboration. Our mission is to empower individuals to grow their skills and contribute to impactful software.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 font-medium shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            Join Us
                        </Button>
                        <Button variant="outline" className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-2 text-primary font-medium shadow-sm transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="rounded-lg overflow-hidden shadow-lg w-64 h-64 flex items-center justify-center">
                        <img
                            src="/about-image.png"
                            alt="About Salafi Coders"
                            width={256}
                            height={256}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
