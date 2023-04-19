'use client'
// import { ObjectId } from "mongodb";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

export default function LinkButton({id}:{id:any}) {
    let router = useRouter()
    //클라이언트 컴포넌트에서만 사용
    //router.back()
    //router.refresh()
    //router.prefetch() -> 페이지에 필요한 파일들 미리로드
    //
    // let a = usePathname()
    // let b = useSearchParams()
    // let c = useParams()
    // console.log(c)
    return <button onClick={() => {router.push(`/detail/${id}`)}}>go to</button>
}