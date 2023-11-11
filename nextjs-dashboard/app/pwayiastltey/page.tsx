import { lusitana } from '@/app/ui/fonts'

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <p>Paisley Wyatt</p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                點開這個連結，還願意給我一點機會就點下載
            </p>
            <button>下載</button>
        </main>
    );
};