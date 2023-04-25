import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request: any, response: any) {
  if (request.method == 'DELETE') {
    // console.log(JSON.parse(request.body));
    let id = JSON.parse(request.body)._id;
    // console.log(id);
    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('post').deleteOne({ _id: new ObjectId(id) });
      return response.status(200).json('del');
    } catch (error) {
      console.error(error);
    }
  }
}
