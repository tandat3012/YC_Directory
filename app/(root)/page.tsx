import { SearchForm } from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query: string }>;
}) {
    const query = (await searchParams).query;
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br /> Conect With Entrereneurs
                </h1>
                <p className="sub-heading !max-w-4xl">
                    Submit Ideas, Vote on Pithces, and Get Noticed in Virtual
                    Competitions
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : 'All Startups'}
                </p>

                <ul className="mt-7 card_grid">
                    <StartupCard />
                </ul>
            </section>
        </>
    );
}
