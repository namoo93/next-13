import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(request: any, response: any) {
  if (request.method == 'POST') {
    if (request.body.name == '' || request.body.email == '' || request.body.password == '') {
      return response.status(500).json('타이틀 공백');
    }

    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('user_cred').insertOne(request.body);
      //암호화 하여 저장

      return response.redirect(302, '/list');
      //응답과 동시에 페이지이동
    } catch (error) {
      console.error(error);
    }
  }
}
