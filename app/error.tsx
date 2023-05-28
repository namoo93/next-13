'use client';
export default function Error({ error, reset }: { error: any; reset: () => void }) {
  console.log('에러', error);
  return (
    <>
      <h4>에러남</h4>
      <button
        onClick={() => {
          reset();
        }}>
        실행시 페이지 다시 로드
      </button>
    </>
  );
}
