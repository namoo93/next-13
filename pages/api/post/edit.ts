import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request: any, response: any) {
  if (request.method == 'POST') {
    if (request.body.title == '' || request.body.content == '') {
      return response.status(500).json('타이틀 공백');
    }
    let editContents = { title: request.body.title, content: request.body.content };
    try {
      let db = (await connectDB).db('forum');
      let result = await db
        .collection('post')
        .updateOne({ _id: new ObjectId(request.body._id) }, { $set: editContents });
      //$inc 기존의 값 +1
      return response.redirect(302, '/list');
    } catch (error) {
      console.error(error);
    }
  }
}
