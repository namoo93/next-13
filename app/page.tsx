import { connectDB } from '@/util/database';
import Image from 'next/image';
import previewImage from '../public/previewimage.png';

export default async function Home() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  // console.log(result);
  return (
    <section className='main'>
      <figure className='main-rank'>
        <figcaption>이번주 캣챠 리뷰 랭크 1위 2위 3위</figcaption>
        {/* {'api불러온뒤 맵으로 이미지소스 불러오기 alt에 사용자 명 또는 이미지 타이틀 과 등수 추가'} */}
        <div className='main-rank-image-box'>
          <div className='main-rank-image-wrap rank1'>
            <Image
              src={previewImage}
              className='main-rank-image preview-image'
              alt={`1위 이미지 입니다`}
            />
          </div>
          <div className='main-rank-image-wrap rank2'>
            <Image
              src={previewImage}
              className='main-rank-image preview-image'
              alt={`1위 이미지 입니다`}
            />
          </div>
          <div className='main-rank-image-wrap rank3'>
            <Image
              src={previewImage}
              className='main-rank-image preview-image'
              alt={`1위 이미지 입니다`}
            />
          </div>
        </div>
      </figure>

      <div>1위2위3위 표시</div>
      <div>캐러셀로 최신순 리뷰 미리보기 최대 8개까지 + 더보기 버튼</div>
      <div>캐러셀로 오늘의 추천 랜덤 || 로그인시 내게 맞는 키워드 추천</div>
      <div>캐러셀로랭킹리스트</div>
    </section>
  );
}
