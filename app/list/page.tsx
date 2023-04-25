import { connectDB } from '@/util/database';
// import Link from "next/link";

import ListItem from './ListItem';
import LinkButton from './LinkButton';
import { ItemType } from '../../types/ItemType';

export const dynamic = 'force-dynamic';

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = (await db.collection('post').find().toArray()) as ItemType[];

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
