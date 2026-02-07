import Link from "next/link";

export default function notFound() {
    return (
        <section className="h-screen w-screen flex items-center justify-center">
            <div>
                <h1 className="text-2xl font-bold mb-6">Sorry, we couldn{`'`}t find your pokemon</h1>
                <p className="mb-8">Maybe soon we{`'`}ll ad it, for now you can see all of our repertory</p>
                <Link
                    href={`/`}
                    className="p-2 bg-blue-400 rounded-lg text-white font-bold hover:bg-blue-500 hover:shadow-xl hover:translate-y-2 inline-block ease-in transition-all duration-300"
                >
                    Go back to home
                </Link>
            </div>
        </section>
    );
}