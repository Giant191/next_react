import React from 'react';
import { lusitana } from '@/app/ui/fonts'
import { Button } from '../ui/button';

function sayHello() {
    alert('You clicked me!');
}

export default function Page() {

    return (
        <main className="flex min-h-screen flex-col p-6">
            <p>Paisley</p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                點開這個連結，還願意給我一點機會就點下載
            </p>
            <a href="nextjs-dashboard/app/pwayiastltey/S__241999875.jpg" target="_blank">
                <Button> Link Button </Button>
            </a>
            <a download="S__241999875.jpg" target="_blank" href="nextjs-dashboard/app/pwayiastltey/S__241999875.jpg">
                <Button> 下載 </Button>
            </a>
        </main>
    );
};