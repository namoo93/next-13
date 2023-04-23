import LinkButton from '@/app/list/LinkButton';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Detail(props: { params: { id: string } }) {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({ _id: new ObjectId(`${props.params.id}`) });

  // console.log(result);
  return (
    <div>
      <h4>상세패이지</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
      <LinkButton
        url={`/edit/${props.params.id}`}
        text={'수정하기'}
      />
    </div>
  );
}
