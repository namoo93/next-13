import { connectDB } from '@/util/database';

export default async function Home() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  // console.log(result);
  return (
    <section className='main'>
      <div>슬릭으로 1위2위3위 표시</div>
      <div>최신순 리뷰 미리보기 최대 8개까지 + 더보기 버튼</div>
      <div>오늘의 추천 랜덤 || 로그인시 내게 맞는 키워드 추천</div>
      <div>랭킹리스트</div>
    </section>
  );
}
