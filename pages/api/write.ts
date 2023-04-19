import { connectDB } from '@/util/database';

export default async function handler(request: any, response: any) {
  let db = (await connectDB).db('forum');

  if (request.method == 'POST') {
    return response.status(200).json('ok');
  }
  // return response.status(400).json('너탓');
  // return response.status(500).json('내탓');
}
