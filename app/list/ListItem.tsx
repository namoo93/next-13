'use client';

import LinkButton from './LinkButton';
import { ItemType } from '../../types/ItemType';

export default function ListItem({ result }: { result: ItemType[] }) {
  return (
    <>
      {result.map((item, idx) => (
        <div
          className='list-item'
          key={idx}>
          <h4>{item.title}</h4>
          <p>{item.date}</p>
          {/* <Link href={`/detail/${item._id}`}></Link> 
          - 서버컴포넌트에서 이동시
          - prefetch기능 내장 & 미리로드 막기 prefetch={false}
          */}
          <LinkButton
            url={`/detail/${item._id.toString()}`}
            text={'go to detail'}
          />
          <button
            onClick={(e) => {
              // fetch('/api/post/test', { method: 'DELETE', body: JSON.stringify({ _id: item._id.toString() }) })
              //   .then((res) => {
              //     if (res.status == 200) {
              //       return res.json();
              //     } else {
              //       //서버가 에러코드를 전송
              //     }
              //   })
              //   .then((res) => {
              //     //성공시 실행
              //     console.log(res);
              //     e.target.parentElement.style.opacity = 0;
              //     setTimeout(() => {
              //       e.target.parentElement.style.display = 'none';
              //     }, 1000);
              //   })
              //   .catch((error) => {
              //     //인터넷 문제로 실패시 실행
              //     console.error(error);
              //   });
              fetch(`/api/post/delete?_id=${item._id.toString()}`).then(() => {
                //@ts-ignore
                e.target.parentElement.style.opacity = 0;
                setTimeout(() => {
                  //@ts-ignore
                  e.target.parentElement.style.display = 'none';
                }, 1000);
              }); // querysting //단점 : 민감한 데이터 불가 // 장점 간단함

              // 요청시 서버로 데이터도 전송하고싶으면 body : 항목에 넣읍시다.
              // 서버로 데이터를 주고 받을때는 문자와 숫자만 주고받을 수있습니다.
              // array, object 자료형에 큰따옴표를 붙이면 문자취급이 가능하며
              // 이것을 JSON 형태라 합니다. 예) {name : 'kim'} → '{"name" : "kim"}'
              // JSON.stringify() 안에 담으면 JSON으로 변환해 줍니다.
              // 예) JSON.stringify( {name : 'kim'} )
              // JSON을 JSON.parse() 안에 담으면 원래 자료형으로 돌아갑니다.
              // 예) JSON.parse( '{"name" : "kim"}' )
            }}>
            del
          </button>
          {/* 서버에게 요청하는방법
          1. form 태그쓰기
          2. Ajax 사용하기
            - 간단한 요청의 경우 fetch(/url?data=data&data2=data2) get으로 데이터를 담아 전송
            - 민감한 정보 아이디비번, 댓글 등 은 post 전송 필요 */}
        </div>
      ))}
    </>
  );
}
