import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(request: any, response: any) {
  if (request.method == 'POST') {
    if (request.body.name == '' || request.body.email == '' || request.body.password == '') {
      return response.status(500).json('타이틀 공백');
    }

    let db = (await connectDB).db('forum');
    let alreadyRegistered = await db.collection('user_cred').findOne({ email: request.body.email });
    // console.log('alreadyRegistered', alreadyRegistered);
    if (alreadyRegistered) {
      return response.status(500).json('이미 가입된 이메일 입니다');
    }

    try {
      //암호화 하여 저장
      let hash = await bcrypt.hash(request.body.password, 10);
      request.body.password = hash;
      console.log('body', request.body);
      let result = await db.collection('user_cred').insertOne(request.body);
      // console.log(result);
      return response.redirect(302, '/list');
      //응답과 동시에 페이지이동
    } catch (error) {
      console.error(error);
    }
  }
}
