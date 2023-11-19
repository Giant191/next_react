import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const dateString = searchParams.get('dateString');
    const typeString = searchParams.get('typeString');
    try {
        if (typeString == '0') {
            const result =
                await sql`UPDATE invoices SET Date = ${dateString}, Amount = Amount +1 where status = 'paisley'`;
            return NextResponse.json({ result }, { status: 200 });
        }
        if (typeString == '1') {
            const result =
                await sql`UPDATE invoices SET Date = ${dateString}, Amount = Amount +1 where status = 'dowload'`;
            return NextResponse.json({ result }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}