import { BodyCountryName } from '@/@types'
import { getFlagUrl } from '@/services'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const body: BodyCountryName = await request.json()
	const response = await getFlagUrl(body.country_name)
	return NextResponse.json(response)
}
