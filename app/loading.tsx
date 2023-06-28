'use client';
import { usePathname } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname == '/shop' || pathname == '/ranking')
    return (
      <div className='loading-wrap'>
        <Skeleton className={'loading-wrap-title'} />
      </div>
    );
  return <div>nothing</div>;
}
