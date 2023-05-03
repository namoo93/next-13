import LinkButton from '@/app/list/LinkButton';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';

export default async function Detail(props: { params: { id: string } }) {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({ _id: new ObjectId(`${props.params.id}`) });
  let session = await getServerSession(authOptions);
  // console.log(result);
  console.log(session);

  return (
    <div>
      <h4>상세패이지</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
      {result?.author === session?.user?.email ? (
        <LinkButton
          url={`/edit/${props.params.id}`}
          text={'수정하기'}
        />
      ) : null}
    </div>
  );
}
