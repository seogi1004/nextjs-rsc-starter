import kv from '@vercel/kv';
import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    let data;

    try {
        const cachedData = await kv.get<any[]>('users');
        if (cachedData === null) {
            data = await sql`SELECT * FROM users`;
            await kv.set('users', JSON.stringify(data.rows), { ex: 10, nx: true })
            console.log("api no cache!");
        } else {
            data = {
                rows: cachedData
            };
            console.log("api cached!")
        }

        // data = await sql`SELECT * FROM users`;
    } catch (e: any) {
        if (e.message === `relation "users" does not exist`) {
            // TODO
        } else {
            throw e
        }
    }
    return NextResponse.json({ users: data?.rows });
}
