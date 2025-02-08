import { getAvailableCountries } from '@/services'
import { NextResponse } from 'next/server'

export async function GET() {
	const response = await getAvailableCountries()
	return NextResponse.json(response)
}
