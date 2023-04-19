import { connectDB } from '@/util/database';
import Link from 'next/link';

export default function Write() {
  //   let db = (await connectDB).db("forum");
  //   let result = await db.collection("post").find().toArray();

  return (
    <div className='list-bg'>
      <h4>글작성</h4>
      <form
        method='POST'
        action='/api/write'>
        <input
          name='title'
          placeholder='in title'
          value={''}
        />
        <textarea
          name='contens'
          placeholder='in contents'
          value={''}></textarea>
        <button type='submit'>전송</button>
      </form>
    </div>
  );
}
