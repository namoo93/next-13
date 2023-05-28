import LinkButton from '@/app/list/LinkButton';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import CommentInput from './CommentInput';
import CommentEdit from './CommentEdit';
import CommentDelete from './CommentDelete';
import { notFound } from 'next/navigation';

export default async function Detail(props: { params: { id: string } }) {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({ _id: new ObjectId(`${props.params.id}`) });
  let session = await getServerSession(authOptions);
  // console.log(result);
  // console.log(session);
  let commentList = await db.collection('comment').find({ parent: props.params.id }).toArray();
  console.log('commentList', commentList);

  if (result === null) {
    return notFound();
  }

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
      {session?.user && (
        <CommentInput
          params={{
            id: props.params.id,
            user: session.user.email,
          }}
        />
      )}
      <p>댓글 리스트</p>
      {commentList.map((comment) => (
        <div key={comment._id.toString()}>
          <span>{comment.author}</span> | <span>{comment.comment}</span>
          {comment.author === session?.user.email ? (
            <>
              <CommentEdit />
              <CommentDelete />
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}
