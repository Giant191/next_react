// 'use client';
// onClick事件要加上這句話

import React from 'react';
import { lusitana } from '@/app/ui/fonts'
import '@/app/pwayiastltey/style.css'
import PortalExample from '@/app/pwayiastltey/PortalExample';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
// import {
//     fetchUpdateI
// } from '@/app/lib/data';

export default async function Page() {
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
            {/* <div>{latestInvoices}</div> */}
        </main>
    );
};