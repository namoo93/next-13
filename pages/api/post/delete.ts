import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request: any, response: any) {
  try {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.query._id) });
    return response.status(200).json('del');
  } catch (error) {
    console.error(error);
  }
}
