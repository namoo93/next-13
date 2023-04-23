'use client';
import LinkButton from './LinkButton';
export default function ListItem({ result }) {
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
            onClick={() => {
              fetch('/api/post/delete', { method: 'DELETE', body: item._id.toString() }).then(() => {});
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
          2. Ajax 사용하기 */}
        </div>
      ))}
    </>
  );
}
