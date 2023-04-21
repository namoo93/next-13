import { connectDB } from '@/util/database';

export default async function handler(request: any, response: any) {
  // console.log(request.body);
  if (request.method == 'POST') {
    if (request.body.title == '') {
      return response.status(500).json('타이틀 공백');
    }
    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('post').insertOne(request.body);
      return response.redirect(302, '/list');
      //응답과 동시에 페이지이동
    } catch (error) {
      console.error(error);
    }
  }
  // return response.status(400).json('너탓');
  // return response.status(500).json('내탓');
}
