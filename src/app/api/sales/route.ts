import { NextResponse } from 'next/server';
import { getSalesData } from '@/lib/mockData';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year');

    if (!year) {
        return NextResponse.json({ error: 'Year is required' }, { status: 400 });
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = getSalesData(parseInt(year, 10));
    return NextResponse.json(data);
}
