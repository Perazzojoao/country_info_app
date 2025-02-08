import { BodyCountryCode } from '@/@types'
import { getBorderCountries } from '@/services'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const body: BodyCountryCode = await request.json()
	const response = await getBorderCountries(body.country_code)
	return NextResponse.json(response)
}
