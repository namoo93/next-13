import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(request: any, response: any) {
  // console.log(request.body);
  let session = await getServerSession(request, response, authOptions);
  // 현재 로그인한 유저정보불러오기
  console.log(session);

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
