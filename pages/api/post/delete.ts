import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request: any, response: any) {
  if (request.method == 'DELETE') {
    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.body._id) });
      return response.redirect(302, '/list');
    } catch (error) {
      console.error(error);
    }
  }
}
