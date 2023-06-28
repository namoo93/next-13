'use client';
import { signIn, signOut } from 'next-auth/react';
import { UserType } from '../types/UserType';
// import { SessionProvider } from 'next-auth/react';
// 클라이언트 컴포넌트에서 로그인된 유저 정보를 위 방법으로 받아올수 있으나
//
export default function LoginBtn({ user }: { user: UserType | null }) {
  //클라이언트 컴포넌트의 경우 서버 컴포넌트에 비해 느리기때문에 서버에서 받아온뒤
  //보여주는것이 더 적합할수 있다
  // let session = useSession();
  // if (session) {
  //   console.log(session);
  // }
  return (
    <>
      {user ? (
        <button
          className='login_btn'
          onClick={() => signOut()}>
          <span className='pr-10'>{user.name}</span>
          <span>Log out</span>
        </button>
      ) : (
        <button
          className='login_btn'
          onClick={() => signIn()}>
          Log in
        </button>
      )}
    </>
  );
}
