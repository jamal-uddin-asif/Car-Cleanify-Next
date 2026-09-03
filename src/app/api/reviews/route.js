import { NextResponse } from "next/server";

const Reviews = [
  {
    userName: 'manum',
    rating: 4,
    review: 'Good'
  },
  {
    userName: 'sohag',
    rating: 5,
    review: 'so Good '
  },
  {
    userName: 'harun',
    rating: 4,
    review: 'Good'
  },
  {
    userName: 'munna',
    rating: 4,
    review: 'wow'
  },
]

export async function GET(req) {
  
  return NextResponse.json(Reviews);
}
