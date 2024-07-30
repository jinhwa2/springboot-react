import React,{useState} from "react";

// Line 15:28:  'userInfo' is not defined  no-undef useState(null);
const Login = () => {
  const [userInfo, setUserInfo] = useState(null);
  
  
  return(
    <>
    {/*만약에 userInfo 정보가 있으면 로그인 완료이고 userInfo 정보가 없으면 로그인하기 화면 보여줌 */}
    
     {/*삼항 연산자 이용하기 */}
    {userInfo ? ('존재한다면') : ('존재하지 않다면 보여줄 코드')}

    {userInfo ? (

      /* 2. userInfo 정보가 있을 때 */
      <div>
        <h1>로그인 완료!</h1>
        <div>{JSON.stringify(userInfo, null, 2) } </div>
        </div>
    ) : (
      /* 1. userInfo 정보가 없을 때 */
      <a href="http://localhost:9010/naverLogin">
        네이버로 로그인하기
        </a>
    ) }
    
    </>
  )
}

export default Login;

/*
백엔드에서 가져온 값 문자열 처리(네이버에서 가져온 값, 특정값을변환, 두 칸 들여쓰기)
{JSON    .            stringify(     userInfo,  null,    2)}
JSON.stringify = 자바 백엔드에서 가져온 값을 문자열로 변환 
                /자바에서 가져오는 데이터가 숫자인지,문자인지 알 수 없는 상태이기 때문에
                /안전하게 한 번 더 문자열로 가져오겠다 설정
=========================================================================================
userInfo = 가져온 값에서 특정 값을 변경하거나 필터링할 것인가? = 변경X = null

고객이 전화번호 [ 010-1111-1111 010.2345.6789 010 3333 3333  01012345678         ]
김말숙 01011111111
박정숙  010.2345.6789
김상숙   010 333 3333
박장숙

========================================================================
{JSON    .            stringify(     userInfo,  null,    2)}

const 유저정보 = {
  key:  value
  id : "123456",
  name: "홍길동",
  phone:"010-9876-5432"

}
DB에 유저가 작성한 핸드폰 번호 중 -를 제거하고 01098765432로 저장하길 원함
const 번호변경하기 = (key, value) => {
  //만약에 key 이름이 phone 이라면
   if(key === 'phone'){
      return value.replace("-","") // '-'를 제거 -를 "" 사용해서 없애기적용
   }
  }
{JSON.stringify(유저정보, 번호변경하기, 2)}

번호변경하기 기능을 거친 유저정보는 아래와 같이 보임
const 유저정보 = {
  key:  value
  id : "123456",
  name: "홍길동",
  phone:"01098765432"

}

만약에 번호를 변경하지 않고, 기존에 가져온 유저정보를 그대로 사용할 경우에는
{JSON.stringify(유저정보, null, 2)}
null = 변경사항없음 을 사용하면 됨



*/