'use client';
// import { ObjectId } from "mongodb";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function LinkButton({ url, text }: { url: string; text: string }) {
  let router = useRouter();
  //클라이언트 컴포넌트에서만 사용
  //router.back()
  //router.refresh()
  //router.prefetch() -> 페이지에 필요한 파일들 미리로드
  //
  // let 현재 URL = usePathname()
  // let searchparameter(querystring)출력 = useSearchParams()
  // let [dynamicroute]에입력한내용(URL파라미터) = useParams()
  // console.log(c)
  return (
    <button
      onClick={() => {
        router.push(url);
      }}>
      {text}
    </button>
  );
}
