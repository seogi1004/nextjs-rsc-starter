import kv from "@vercel/kv";
import { sql } from "@vercel/postgres";

export interface User {
    id: number;
    name: string;
    image: string;
    email: string;
    createdAt: Date;
}

export async function getUsers(cacheKey: string) {
    const cachedData = await kv.get<User[]>(`users-${cacheKey}`);
    if (cachedData === null) {
        const data = await sql<User>`SELECT * FROM users`;
        await kv.set(`users-${cacheKey}`, JSON.stringify(data.rows), { ex: 10, nx: true })
        console.log(`no cache! (${cacheKey})`);
        return data.rows;
    } else {
        console.log(`cached! (${cacheKey})`)
        return cachedData;
    }
}