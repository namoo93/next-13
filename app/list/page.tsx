import { connectDB } from '@/util/database';
// import Link from "next/link";

import ListItem from './ListItem';
import LinkButton from './LinkButton';

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  // console.log(result);
  return (
    <div className='list-bg'>
      <LinkButton
        url='/write/'
        text='new'
      />
      <ListItem result={result} />
    </div>
  );
}
