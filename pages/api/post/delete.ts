import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(request: any, response: any) {
  if (request.method == 'DELETE') {
    let session = await getServerSession(request, response, authOptions);
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({ _id: new ObjectId(request.query._id) });

    // console.log('rrrrrrrrreult bool', result?.author === session?.user?.email);
    if (result?.author === session?.user?.email) {
      try {
        await db.collection('post').deleteOne({ _id: new ObjectId(request.query._id) });
        return response.status(200).json('del');
      } catch (error) {
        console.error(error);
      }
    } else {
      return response.status(500).json('현재유저와 작성자 불일치');
    }
  }
}
