import { connectDB } from '@/util/database';
// import Link from "next/link";
import LinkButton from '../components/LinkButton';

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  // console.log(result);
  return (
    <div className='list-bg'>
      {result.map((item, idx) => (
        <div
          className='list-item'
          key={idx}>
          <h4>{item.title}</h4>
          <p>{item.date}</p>
          {/* <Link href={`/detail/${item._id}`}></Link> 
          - 서버컴포넌트에서 이동시
          - prefetch기능 내장 & 미리로드 막기 prefetch={false}
          */}
          <LinkButton id={item._id.toString()} />
        </div>
      ))}
    </div>
  );
}
