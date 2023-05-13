import { getUsers } from '@/lib/service';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        return NextResponse.json({ users: await getUsers('client') });
    } catch (e: any) {
        if (e.message === `relation "users" does not exist`) {
            // TODO
        } else {
            throw e
        }
    }
    return NextResponse.json({ users: [] });
}
