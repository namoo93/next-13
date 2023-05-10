import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request: any, response: any) {
  if (request.method == 'POST') {
    console.log('comment', request.body);

    if (request.body.comment == '') {
      return response.status(500).json('comment 공백');
    }
    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('comment').insertOne(request.body);
      return response.redirect(302, `/detail/${request.body.parent}`);
    } catch (error) {
      console.error(error);
    }
  }
}
