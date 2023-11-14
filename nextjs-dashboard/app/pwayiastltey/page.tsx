'use client';
// onClick事件要加上這句話

import { sql } from '@vercel/postgres';
import React from 'react';
import { lusitana } from '@/app/ui/fonts'
import { Button } from '../ui/button';
// import PortalExample from './PortalExample';
import '@/app/pwayiastltey/style.css'
import PortalExample from '@/app/pwayiastltey/PortalExample';
import {
    fetchUpdateI
} from '@/app/lib/data';

// function MyButton() {
//     function handleClick() {
//         alert('You clicked me!');
//     }

//     return (
//         <button onClick={handleClick}>
//             Click me
//         </button>
//     );
// }

export default function Page() {
    const latestInvoices = fetchUpdateI('2023-10-10');
    return (
        <main className="flex min-h-screen flex-col p-6">
            <p></p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                Paisley請使用電腦開啟這網頁<br></br>
                進到這個頁面，願意給我一點機會，點擊下載
            </p>
            <div className="clipping-container">
                <PortalExample />
            </div>
            {/* <MyButton />
            <a download="S__241999875.jpg" target="_blank" href="">
                <Button> 下載 </Button>
            </a> */}
        </main>
    );
};