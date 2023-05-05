import { connectDB } from '@/util/database';
// import Link from "next/link";

import ListItem from './ListItem';
import LinkButton from './LinkButton';
import { ItemType } from '../../types/ItemType';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const dynamic = 'force-dynamic';
// export const revalidate = 60; //페이지 방문시 60초동안 캐싱

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = (await db.collection('post').find().toArray()) as ItemType[];
  let session = await getServerSession(authOptions);
  //get요청결과 캐싱
  // await fetch('/url', { cache: 'force-cache' });// 기본값 생략가능 매번 get가져옴
  // await fetch('/url', { cache: 'no-store' }); //실시간 데이터를위한 캐싱x
  // await fetch('/url', { next: {revalidate: 60} }); //60초간 캐싱 데이터보관
  // - Next.js에선 쌩자바스크립트의 fetch() 기본함수를 업그레이드해놔서 사용가능한 문법입니다.
  // - server component 안에서만 캐싱기능 사용가능

  return (
    <div className='list-bg'>
      {session && (
        <LinkButton
          url='/write/'
          text='new'
        />
      )}

      <ListItem
        result={result}
        user={session ? session : null}
      />
    </div>
  );
}
