import React, { createContext, Profiler, useContext, useEffect, useState, useRef, } from "react";

import {
  BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, 
} from "react-router-dom"
// import { isButtonElement } from "react-router-dom/dist/dom";

export default App;

// component 라고함 화면에 기본적으로 뜨는 화면
// function App() {
//   return <h1>Hello React</h1> // 실제 HTML은 아님
// }

/*

  1. 리액트란 ?
    - UI를 개발하기 위해 사용되는 자바스크립트 라이브러리
        UI (User Interface) : 유저가 앱과 소통하기 위한 도구 예)뷰 (화면)
        라이브러리 : 자주 사용되는 코드의 묶음
    - 페이스북이 개발
    - 가장 인기있는 프론트엔드 프레임워크

  2. 리액트의 특징
    - 컴포넌트 기반
        컴포넌트 : 뷰를 구성하는 부품
        <컴포넌트 특징 : 합성, 재사용등이 가능하다.>
    - 선언적인 문법

  3. 리액트의 구조
    - 싱글페이지 구조
    - 가상의 DOM(virtual DOM)을 HTML에 주입한다.
        public-index.html 파일의 root id에 scr-index.js에 전달된 값을 주입함.
        돔에 입력된 JSX문법이 babel(js 컴파일러)을 통해 일반 자바스크립트 객체로 변환되어 주입되는것임

*/


/*
  JSX

  JSX: JavaScript Extension
  자바스크립트의 확장문법이다.
  가상의 DOM을 만들 때 사용된다.
  선언적인 문법으로 사용하기 편리하다.

  1. JSX 개념
  2. JSX 문법
  3. JSX에서 연산결과 출력하기
  4. JSX에서 조건문
  5. JSX에서 반복문 사용하기

*/


// 1. JSX 개념

// * JSX를 사용하지 않음 -> 복잡한 트리를 만들기 어려움
// function App() {
//   let h1 = React.createElement('p', {}, 'Hello React'); // 명령적 문법(하나 하나 명령해야함)

//   return h1
// }

// * JSX를 사용
// function App() {
//   let h1 = <h1>Hello React</h1>; // 선언적 문법

//   return h1;
// }


/*
  2. JSX 문법

  - React Fragment
  - 엘리먼트 attribute
  - inline style
*/

// React Fragment (빈태그)
// function App() {
//   return ( // 트리를 여러줄 작성할때 괄호()
//     // JSX규칙 돔을 감싸는 태그가 있어야함
//     // Fragment : JSX의 규칙을 지키기위해 불필요한 태그의 사용을 방지
//     <>
//       <h3>React Fragment</h3>
//       <ul>
//         <li>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>
//   )
// }

// 엘리먼트 attribute - HTML과 별 차이 없음
// function App() {
//   return (
//     <>
//       <h3>JSX 엘리먼트 attribute</h3>
//       <ul>
//         <li>
//           <a href="https://google.com" target="_blank">Foo</a>
//         </li>
//         <li>
//           <img src="/" alt="Bar" />
//         </li>
//         <li>
//           <input type="text" placeholder="Baz" autoComplete="off" />
//         </li>
//       </ul>
//     </>
//   )
// }

// inline style : HTML에 style을 직접 적용 {스타일 object를 전달}
// function App() {
//   return (
//     <>
//       <h3>JSX inline style</h3>
//       <ul style={{border: "1px solid"}}>
//         <li style={{textDecoration: "underline"}}>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>
//   )
// }

// Q. 문제
// function App() {
//   const st = {
//     textDecoration: "line-through",
//     color: "#f00"
//   };
//   return (
//     <>
//       <h3>Q. 스타일 객체를 사용하여 맥주리스트를 출력해보세요</h3>
//       <ul>
//         <li style={st}>Guinness Ireland</li>
//         <li>Heineken Netherlands</li>
//         <li>Budwiser USA</li>
//       </ul>
//     </>
//   )
// }


// JSX에서 연산결과 출력하기
// function App() {
//   let cat = {
//     name: 'kitty',
//     age: 2,
//     home: null, // JSX에서 출력 x (null, undefined)
//     sound: function() {
//       return 'meow';
//     }
//   }
//   // console.log(cat.name); // js에서는 ()사용했으나 JSX는 {}
//   // 객체는 중괄호{}내에서 접근.
//   return (
//     <>
//       <h3>{cat.name}</h3>
//       <ul>
//         <li>이름: {cat.name}</li>
//         <li>나이: {cat.age}</li>
//         <li>집: {cat.home}</li>
//         <li>울음: {cat.sound()}</li>
//       </ul>
//     </>
//   )
// }


/*
  4. JSX에서 조건문 사용
    논리연산자와 삼항연산자를 사용한다.

    && (그리고)
    || (또는)
    ! (부정)
    ? (삼항연산자)
    <if, swich 사용불가>
*/

// &&
// function App() {
//   // 조건1, 조건2 둘 다 참이면 조건2 실행
//   return (
//     <>
//       <h3>JSX 조건문</h3>
//       <p>조건1 &amp;&amp;(그리고) 조건2</p>
//       <ul>
//         <li>{'lol' && 'Foo'}</li>
//         <li>{false && 'Bar'}</li>
//         <li>{'lol' && false}</li>
//       </ul>
//     </>
//   )
// }

// ||
  // function App() {
  //   // 조건1, 조건2 둘 다 참이면 조건1 실행
  //   // 둘 중 하나가 참이면 참인 조건 실행
  //   return (
  //     <>
  //       <h3>JSX 조건문</h3>
  //       <p>조건1 ||(또는) 조건2</p>

  //       <ul>
  //         <li>{'lol' || 'Foo'}</li>
  //         <li>{false || 'Bar'}</li>
  //         <li>{'lol' || false}</li>
  //       </ul>
  //     </>
  //   )
  // }

// function App() {
//   // 삼항연산자{조건이 참이면 앞 실행}
//   // 삼항연산자{조건이 거짓이면 뒤 실행}
//   return (
//     <>
//       <h3>JSX 조건문</h3>
//       <p>!(부정), ?(삼항연산자)</p>
//       <ul>
//         <li>{!'Foo'}</li>
//         <li>{true ? 'Bar' : ''}</li>
//         <li>{false ? '' : 'Baz'}</li>
//       </ul>
//     </>
//   )
// }


/*
  5. JSX에서 반복문 출력하기
*/

// function App() {
//   const arr = ['foo', 'bar', 'baz'];

//   // map 매서드 : array의 item을 순회하여 작업 (새로운 array를 return)
//   // const r = arr.map((item, index, arr) => {
//   //   return item.toUpperCase();
//   // })

//   // console.log(r); // ['FOO', 'BAR', 'BAZ']

//   return (
//     <>
//       <h1>JSX 반복문</h1>
//       <ul>
//         {arr.map((item, index) => ( // JSX를 감쌀때 소괄호()사용
//         // key : 리액트에서 반복문을 출력할때 필요한 속성
//         <li key={index}>{item}</li>))}
//       </ul>
//     </>
//   )
// }


// Q. 반복문 ,map 메서드
// function App() {
//   const beers = [
//     {name: 'Heineken', origin: 'Netherlands'},
//     {name: 'Guinness', origin: 'Ireland'},
//     {name: 'Asahi', origin: 'Japan'},
//   ]

//   return (
//     <>
//       <h1>세계맥주</h1>
//       <ul>
//         {beers.map((beer, index) => (
//           // key는 중복x 
//           <li key={index}>{beer.name}, {beer.origin}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

//---------------------------------------------------------------------------------------------------//

/*
  컴포넌트

  1. 컴포넌트란
    UI를 설계하는데 쓰이는 독립적이고 재사용가능한 부품
    첫 글자가 대문자여야 컴포넌트로 인식이 가능함

  2. 컴포넌트의 종류
    함수 컴포넌트 (주로 사용)
    클래스 컴포넌트 (잘 사용안함)

  3. 컴포넌트 합성
    컴포넌트 내에서 다른 컴포넌트를 호출한다.
*/


// function App() {

//   return (
//     <>
//       <h1>Youtube</h1>
//       <Content />

//       <h2>Comments</h2>
//       <Comments />

//       <hr />

//       <h2>Suggested</h2>
//       <Suggested />
//     </>
//   )
// }

// function Content() {
//   return (
//     <div>
//       <h2>고양이는 액체일까?</h2>
//       <img src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6j8l/image/5yuYDkk43MrgHdfYuVI5kM1htTs.jpg" alt="" width="100%"></img>
//     </div>
//   )
// }

// function Comments() {
//   return (
//     <ul>
//       <li>유치하게 등수는 ... 3빠</li>
//       <li>2빠</li>
//       <li>1빠</li>
//     </ul>
//   )
// }

// function Suggested() {
//   return (
//     <ul>
//       <li>고양이는 정말 폭력적일까?</li>
//       <li>고양이는 정말 자기가 신이라고 생각할까?</li>
//       <li>냥냥펀치는 얼마나 아플까?</li>
//     </ul>
//   )
// }


// Q. 인스타그램
// function App() {
//   return (
//     <>
//       <h1>Instagram</h1>
//       <Profile />

//       <h2>Suggested</h2>
//       <Suggested />

//       <h2>Timeline</h2>
//       <Timeline />
//     </>

//   )
// }

// const st = {}
// function Profile() {
//   return (
//   <>
//     <img src="https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg" style={{width: '100px', height: '100px', borderRadius: "50%", objectFit: 'cover'}}></img>
//     <h2>다나카상</h2>
//     <div>안녕하세요 여러붕구, 다나카입니다</div>

//   </>
//   )
// }

// function Suggested() {
//   return (
//     <>
//       <ul> 
//         <li>나몰라패밀리 공식계정</li>
//         <li>나몰라패밀리 김태환</li>
//         <li>아싸 최우선</li>
//       </ul>
//     </>
//   )
// }

// function Timeline() {
//   return (
//     <>
//       <ul> 
//         <li>시그니처 아르마니 티셔츠 입고 왔어요</li>
//         <li>웃찾사 때보다 인기도 수입도 10배</li>
//       </ul>
//     </>
//   )
// }

//---------------------------------------------------------------------------------------------------//

/*
  Props
    properties(속성의 집합) = 객체

  1. Props 개념
  2. 사용방법
  3. children props
  4. Context Hook

*/


/*
  1. props의 개념
    컴포넌트에 전달되는 인자
*/

// function App() {
//   const irishBeer = {name: 'Guinness', origin: 'Ireland', available: false}

//   return (
//     <>
//       <h1>맥주</h1>
//       <Beer beer={irishBeer} />
//     </>
//   )
// }

// function Beer(props) {
//   console.log(props)

//   console.log(props.beer);

//   const beer = props.beer;

//   return (
//     <ul>
//       <li>이름: {beer.name}</li>
//       <li>원산지: {beer.origin}</li>
//       <li>판매중: {beer.available ? '예' : '아니오'}</li>
//     </ul>
//   )
// }


// 서버로부터 응답받은 데이터
// 컴포넌트에서 프롭스에 접근하기 위해서는 프롭스 속성값으로 접근한다.
// const video = {
//   title: '고양이는 액체일까?',
//   src: 'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6j8l/image/5yuYDkk43MrgHdfYuVI5kM1htTs.jpg'
// };

// const suggestedVideos = [
//   {id: 'a0', title: '고양이는 정말 폭력적일까?'},
//   {id: 'a1', title: '고양이는 정말 자기가 신이라고 생각할까?'},
//   {id: 'a2', title: '냥냥펀치는 얼마나 아플까?'},
// ];

// const comments = [
//   {id: 'c0', content: '1빠'},
//   {id: 'c1', content: '2빠'},
//   {id: 'c2', content: '유치하게 등수는... 3빠'},
// ];

// function App() {
//   return (
//     <>
//       <h1>YouTube</h1>
//       <Content video={video} />

//       <Comments comments={comments} />
//       <hr />

//       <SuggestedVideos suggestedVideos={suggestedVideos} />

//     </>
//   )
// }

// function Content(props) {

//   const video = props.video;

//   return (
//     <div>
//       <h2>{video.title}</h2>
//       <img 
//       src={video.src}
//       alt=""
//       width="100%"></img>
//     </div>
//   )
// }

// function Comments(props) {

//   const comments = props.comments;

//   console.log(comments);

//   return (
//     <>
//       <h1>Comments</h1>
//       <ul>
//         {comments.map(comment => (
//           <li key={comment.id}>{comment.content}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// function SuggestedVideos(props) {
//   const suggestedVideos = props.suggestedVideos;

//   console.log(suggestedVideos);

//   return (
//     <>
//       <h2>Suggested</h2>
//       <ul>
//         {suggestedVideos.map(suggestedVideos => (
//           <li key={suggestedVideos.id}>{suggestedVideos.title}</li>
//         ))}
//       </ul>
//     </>
//   )
// }


// Q. Instagram

// const profile = {
//   username: '다나카',
//   image: 'https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg',
//   bio: '안녕하세요 여러붕구, 다나카입니다',
// };

// const accounts = [
//   {id: 's0', username: '나몰라패밀리 공식계정'},
//   {id: 's1', username: '나몰라패밀리 김태환'},
//   {id: 's2', username: '아싸 최우선'},
// ];

// const articles = [
//   {id: 'a0', title: '시그니처 아르마니 티셔츠 입고 왔어요'},
//   {id: 'a1', title: '웃찾사 때보다 인기도 수입도 10배'},
//   ];

//   function App() {
//     return (
//       <>
//         <h1>Instagram</h1>
        
//         <Profile profile={profile} />

//         <Suggested accounts={accounts} />

//         <Timeline articles={articles} />
//       </>
//     )
//   }

//   function Profile(props) {
//     const profile = props.profile;
//     // console.log(profile);

//     return (
//       <>
//         <img 
//           src={profile.image} 
//           style={{
//             width: '100px', 
//             height: '100px', 
//             borderRadius: "50%", 
//             objectFit: 'cover'}} 
//           alt='다나카 상'
//         />
//         <h3>{profile.username}</h3>
//         <p>{profile.bio}</p>
//       </>
//     )
    
//   }
//   function Suggested(props) {
//     const accounts = props.accounts;
//     // console.log(accounts);

//     return (
//       <>
//         <h2>Suggested</h2>
//         <ul>{accounts.map(account => (
//           <li key={account.id}>{account.username}</li>
//         ))}
//         </ul>
//       </>
//     )

//   }
//   function Timeline(props) {
//     const articles = props.articles;
//     // console.log(articles);

//     return(
//       <>
//         <h2>Timeline</h2>
//         <ul>{articles.map(article => (
//           <li key={article.id}>{article.title}</li>
//         ))}</ul>
//       </>
//     )

//   }



/*
  3. children props

     컴포넌트에 자식 컴포넌트를 추가한다
*/


// function App() {

//   return (
//     // 닫는 태그가 있음
//     <Layout>
//       <Article /> 
//     </Layout>
//     // children 컴포넌트는 닫는태그가 없음 (셀프 클로징)
//   )
// }

// function Layout(props) {
//   // 파라미터에 props가 온거는 해당 컴포넌트에서 Article 자식컴포넌트에 접근하기 위함

//   return(
//     <>
//       <h1>Instagram</h1>

//       <nav>
//         <ul>
//           <li>홈</li>
//           <li>소개</li>
//           <li>게시물</li>
//         </ul>
//       </nav>

//       {props.children}
//     </>
//     // {props.children} children에 접근하는 속성은 정해져있음
//   )
// }

// function Article() {

//   return(
//     <>
//       <img
//         src="https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg"
//         alt=''
//         width="100%"
//       />
//       <p>
//         <b>danaka </b>
//         다나카상 라디오 스타 출연했어요 ^00^
//       </p>

//       <small>1일 전</small>
//     </>
//   )
// }


/*
  4. useContext Hook (리액트에서 제공하는 함수의 한 종류)

    children 컴포넌트에 데이터를 전달하는 Hook이다.

    - useContext import
    - Cocreatentext import
*/

// const AuthContext = createContext();

// function App() {

//   return (
//     <AuthProvider>
//       <Layout>
//         <Article /> 
//       </Layout>
//     </AuthProvider>
//   )
// }

// function AuthProvider(props) {

//   // value는 지역변수임 해당 컴포넌트 안에서만 접근이 가능..
//   // 해당 컴포넌트의 자식 컴포넌트가 변수에 접근할 수 있도록 하는게 useContext Hook
//   const value = {username: 'bunny'};

//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }

// function Layout(props) {
//   // 파라미터에 props가 온거는 해당 컴포넌트에서 Article 자식컴포넌트에 접근하기 위함

//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return(
//     <>
//       <h1>Instagram</h1>

//       <nav>
//         <ul>
//           <li>홈</li>
//           <li>소개</li>
//           <li>게시물</li>
//         </ul>
//       </nav>

//       <p>안녕하세요 {auth.username}님</p>

//       {props.children}
//     </>
//     // {props.children} children에 접근하는 속성은 정해져있음
//   )
// }

// function Article() {

//   const auth = useContext(AuthContext);
//   console.log(auth);

//   return(
//     <>
//       <img
//         src="https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg"
//         alt=''
//         width="100%"
//       />
//       <p>
//         <b>danaka </b>
//         다나카상 라디오 스타 출연했어요 ^00^
//       </p>

//       <small>1일 전</small>
//     </>
//   )
// }



//--------------------------------------------------------------------------------------------------------//


/*

  리액트에서 이벤트 처리하기

*/

// function App() {

//   function handleClick(e) {
//     alert('lol');
//   }

//   return(
//     <>
//       <h1>Basic</h1>
//       {/* onEventName = eventHandler */}
//       <button onClick={handleClick}>Button</button>
//     </>
//   )
// }



//----------------------------------------------------------------------------------------------------------//

/*

  리액트에서 HTML 업데이트하기
  useState import

*/

// function App() {

//   /*
//     const [state, setState] = useState(initialValue)

//     state: 컴포넌트에서 관리되는 변수
//     setState: state를 업데이트하는 메서드
//     initialValue: state의 초기값
//   */

//   const [count, setCount] = useState(0); // 구조분해할당

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)} style={{marginRight: '10px'}}>Add</button>
//       <button onClick={() => setCount(count - 1)} style={{marginRight: '10px'}}>Minus</button>
//       <button onClick={() => setCount(0)}>Delete</button>
//     </>
//   )
// }


// useState Hook 없이 가능 ..?
// function App() {
//   let count = 0;

//   console.log(count);

//   /*
//     HTML을 업데이트하기 위해서는 DOM을 다시 리턴해야 한다.
//     DOM을 다시 리턴하기위해서는 컴포넌트를 다시 실행해야 한다.
//     setState함수가 컴포넌트를 다시 실행한다.
//     HTML이 업데이트 된다.
//   */

//   function handleClick(e) {
//     count++;
//   }

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={handleClick}>Add</button>
//     </>
//   )
// }


// Q. 구독버튼 만들기

// function App() {

//   const [subscribed, setSubscribed] = useState(false);

//   console.log(subscribed);


//   return (
//     <>
//       <h1>구독버튼</h1>
//       <button onClick={() => setSubscribed(!subscribed)}>{subscribed==false ? '구독하기' : '구독취소'}</button>
//     </>
//   )
// }


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>count: {count}</h1>

//       <Article
//         count={count}
//         setCount={setCount}
//       />
//     </>
//   )
// }

// function Article(props) {
//   // Article 컴포넌트에서 상위 컴포넌트의 state를 props객체로 접근 가능
//   // 상위 컴포넌트가 재실행되면 하위 컴포넌트도 재실행 됨
//   return(
//     <>
//       <button onClick={() => props.setCount(props.count +1)}>
//         Add
//       </button>
//     </>
//   )
// }


//------------------------------------------------------------------------------------------------//


/*

  리액트 라우터

  1. 리액트 라우터
      라우터 : 요청(특히 url)에 적합한 작업을 수행하는 것
  
  2. 라우터 기본

  3. 인증이 적용된 라우터

*/


// function Home() {
//   return <h1>Home</h1>
// }

// function About() {
//   return <h1>About</h1>
// }

// function Posts() {
//   return(
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to='/post/p1'>Post 1</Link>
//         </li>
//         <li>
//           <Link to='/post/p2'>Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function Post() {
//   /*
//     useParams
//     url로 전달된 파라미터에 접근하게 한다.
//   */
//   const params = useParams();
//   const postId = params.postId;

//   // postId를 서버에 전송한다.
//   console.log(params);

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// function App() {
//   return (
//     <>
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/about'>About</Link>
//           </li>
//           <li>
//             <Link to='/posts'>Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         {/* 라우트 컴포넌트 */}
//         {/* path : 경로 element: path와 일치할때 렌더링 될 컴포넌트 */}
//         {/* path='*' >> path가 일치하지 않을 떄 (꼭 만들어야함) */}
//         <Route path='/' element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='posts' element={<Posts />} />
//         <Route path='post/:postId' element={<Post />} />
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </Router>
//     </>
//   )
// }


// 3. 인증이 적용된 라우터

// function App() {
//   return(
//     <Router>
//       <AuthProvider>
//         <Routes>
//           <Route path='/' element={<Layout />}>
//           {/* 경로랑 상관없이 Layout 컴포넌트는 고정 */}

//             {/* 경로가 바뀌면 Outlet만 바뀌는거임 */}
//             <Route index element={<Home />} />
//             <Route path="posts" element={<Posts />} />
//             <Route path="post/:postId" element={
//               <AuthRequired>
//                 <Post />
//               </AuthRequired>
//             } />
//             <Route path="*" element={<NotFound />} /> 
//           </Route> 
//         </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }

// const AuthContext = createContext();

// function AuthProvider(props) {
//   const [user, setUser] = useState(null);

//   // 로그인
//   function signIn(username) {
//     setUser(username);
//   }

//   // 로그아웃
//   function signOut() {
//     setUser(null);
//   }

//   const value = {user,signIn, signOut};

//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }

// function Layout() {
//   const auth = useContext(AuthContext);

//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/posts'>Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       {auth.user ? (
//         <p>
//           Hi, {auth.user} {' '}
//           <button onClick={auth.signOut}>
//             Logout
//           </button>
//         </p>
//       ) : (
//         <p>
//           Not logged in
//         </p>
//       )}

//       <Outlet />
//     </>
//   )
// }

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to='/post/p01'>Post 1</Link>
//         </li>
//         <li>
//           <Link to='/post/p02'>Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function AuthRequired(props) {
//   const auth = useContext(AuthContext);

//   // console.log(auth);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     auth.signIn(formData.get('username'));

//     // console.log(formData.get('username'));
//   }
  
//   if (!auth.user) {
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input type='text' name='username' required />
//         <button type='submit'>Login</button>
//       </form>
//     )
//   }

//   return props.children;
// }

// function Post() {
//   const params = useParams();
//   const postId = params.postId

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }


//---------------------------------------------------------------------------------------------//


/*

  데이터 가져오기

  1. 데이터 가져오기란?
    서버에 데이터를 요청해서 응답받는 것

  2. useEffect Hook

  3. 데이터 가져오기 예시

*/


// 2. useEffect

// function App() {
//   const [count, setCount] = useState(0);

//   /*

//     useEffect
//     비동기적으로 작동한다. (가장 마지막에 실행)
//     (effect는 useEffect의 콜백함수)
  
//     1. useEffect(effect): effect는 컴포넌트가 실행될 때마다 실행된다.
//     2. useEffect(effect, []): effect는 컴포넌트의 최초 실행시에만 실행된다.
//     3. useEffect(effect, [dep]): effect는 컴포넌트의 최초 실행시,
//         dependency가 업데이트 될 때마다 실행된다.

//   */
//   useEffect(() => {
//     console.log('lol')
//   })

//   return (
//     <>
//       <h1>count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   )
// }


// 3. 데이터 가져오기 예시

// function fetchData() {

//   const DATA = {
//     username: '유리',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJIljbWXKMx_BLJJaoeYuv0aAUqvIbLqZlw&usqp=CAU',
//     bio: '유리의 인스타그램입니다.',
//   }

//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(DATA)
//     }, 2000)
//   })

//   return promise;
// }

// function App() {

//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     fetchData()
//     .then(data => {
//       // profile state 업데이트
//       setProfile(data)
//     })
//     .catch(error => {
//       setError(error)
//     })
//     // 성공 실패와 상관없이 무조건 실행
//     .finally(() => setIsLoaded(true))
//   }, [])

//   if (error) {
//     return <p>failed to fetch profile</p>
//   }

//   // 여기가 먼저 실행되고 useEffect 실행
//   if (!isLoaded) {
//     return <p>fetching profile...</p>
//   }

//   return(
//     <>
//       <h1>Profile</h1>
//       <img
//         src={profile.image}
//         alt={profile.username}
//         style={{
//           width: '100px',
//           height: '100px',
//           objectFit: 'cover',
//           borderRadius: '50%'
//         }}
//       />
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//     </>
//   )
// }



/*
//---------------------------------------------------------------------------------------------//
// # to do list 만들기

const initialTasks = [
  {id: "todo-0", name: "Eat", completed: true},
  {id: "todo-1", name: "Sleep", completed: false},
  {id: "todo-2", name: "Repeat", completed: false},
];

const FILTER_MAP = {
  All: () => true,
  Done: task => task.completed,
  Active: task => !task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP); // 객체의 속성을 문자열 array로 return

console.log(FILTER_NAMES);

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('All');
  // [useState]
  // const [state, setState] = useState(initialValue)
  // state: 컴포넌트에서 관리되는 변수
  // setState: state를 업데이트하는 메서드
  // initialValue: state의 초기값


  // tasks 추적하기
  console.log(tasks);


  // task 추가하고 tasks업데이트하는 함수
  function addTask(name) {
    const newTask = {
      id: `todo-${Math.random()}`,
      name, // name: name (속성과 속성값이 같을때 생략해서 사용가능)
      completed: false
    }
    // console.log(newTask); 

    const updatedTasks = [...tasks, newTask]; // 기존의 array에 새로운 array를 추가
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }


  // task 삭제하는 함수
  function deleteTask(id) {
    // console.log(id);

    const remainingTask = tasks.filter(task => task.id !== id) // tasks를 순회하면서 filter 조건에 해당하는 task만 리턴
    setTasks(remainingTask);
  }


  // 완료상태를 바꾸는 함수
  function toggleTaskCompleted(id) {
    // console.log(id); check box click했을때 id
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task; // 일치하지 않으면 return
    })

    setTasks(updatedTasks);
  }


  function editTask(id, newName) {
    const editedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, name: newName}
      }
      return task;
    })
    setTasks(editedTasks);
  }

  
  const filterButtons = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name}
      name={name}
      isPressed={filter === name}
      setFilter={setFilter}
    />
  ))


  // 할일목록을 담은 변수
  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo
    key={task.id}
    id={task.id}
    name={task.name}
    completed={task.completed}
    deleteTask={deleteTask}
    toggleTaskCompleted={toggleTaskCompleted}
    editTask={editTask}
    />
  ))

  return (
    <div className="max-w-sm mx-auto mt-8 border p-4">
      <h1 className="text-2xl text-center mb-4">할일 목록</h1>

      <Form addTask={addTask} />
      <div className="flex flex-nowrap gap-1 mb-4">
        {filterButtons}
      </div>

      {/* <h2 className="text-xl mb-4">{taskList.length}개 남았습니다.</h2>
      <ul>
        {taskList}
      </ul>
    </div>
  )
}
// App ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


function Form(props) {
  const [name, setName] = useState(""); // 새로 추가될 todo의 이름을 관리

  // console.log(name); // input의 value가 잘 업데이트되는지 확인

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name); // form을 submit하면 addTask함수에 name인자를 전달 > newTask생성
    // console.log(name); // button을 click했을때 input의 value 

    //form을 제출하고 input을 비움
    setName("");
  }

  return(
    <form
      className="mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="border px-2 py-1 w-full mb-2"
        value={name} // setName을 빈문자열로하면 input의 value가 name이니까 여기가 비워짐
        onChange={(e) => setName(e.target.value)} // input에 value가 바뀔때마다 event 발생
        autoComplete="off"
      />
      <button
        type="submit"
        className="p-1 w-full border disabled:opacity-50 text-blue-500"
        disabled={!name.trim()} // input에 입력값이 없을 경우 disabled (trim은 문자열 앞뒤 공백 제거)
      >
        Add
      </button>
    </form>
  )
}

function FilterButton(props) {
  return(
    <button
      className={"p-1 w-1/3 border " + (props.isPressed && "outline")} // filter === name가 true면 뒤 실행
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  )
}

function Todo(props) {
  // console.log(props); // props = 각 task <Todo 컴포넌트에서 전달받음>
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const inputEl = useRef(null); // {current: null}

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setIsEditing(false);
    // input을 비운다
    setNewName("");
  };


useEffect(() => { // 비동기 (버츄얼돔때문)
  if (isEditing) {
    inputEl.current.focus();
  }
})

  const viewTemplate = (
    <>
      <div className="flex mb-2">
        <label>
          <input
            type="checkbox"
            className="hidden peer"
            checked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)} // checkbox에서 onChange는 check
          />
          <span className="text-xl peer-checked:line-through">
            {props.name}
          </span>
        </label>
      </div>
      <div className="flex flex-nowrap gap-1">
        <button
          type="button"
          className="w-1/2 p-1 border"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className="w-1/2 p-1 border text-red-500"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </>
  );


  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="border px-2 py-1 w-full mb-2"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        ref={inputEl}
      />
      <div>
        <div className="flex flex-nowrap gap-1">
          <button
            type="button"
            className="w-1/2 p-1 border"
            onClick={() => setIsEditing(false)}
          >
            Calcel
          </button>
          <button
            type="submit"
            className="w-1/2 p-1 border disabled:opacity-50 text-blue-500"
            disabled={!newName.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <li className="mb-4">
       {isEditing ? editingTemplate : viewTemplate}
    </li>
  )
}

*/

const initialBeers = [
  {id: 'b0', name: '기네스'},
  {id: 'b1', name: '하이네켄'},
  {id: 'b2', name: '버드와이저'},
]

function App() {

  const [beers, setBeers] = useState(initialBeers);
  const [newItemId, setNewItemId] = useState({id: null});

  console.log(beers);

  function addBeer(name) {
    const newBeer = { id: Math.random(), name };

    const updatedBeers = [...beers, newBeer]; 
    setBeers(updatedBeers);

  }

  function deleteBeer(id) {
    const remainingBeers = beers.filter(beer => beer.id !== id);

    setBeers(remainingBeers);
  }

  const beerList = beers.map(beer => (
    <Beer key={beer.id} beer={beer} deleteBeer={deleteBeer} />
  ))

  return (
    <>
      <h1>세계맥주</h1>
      <Form addBeer={addBeer}/>
      <ul style={{ display: 'flex', flexDirection: 'column', transition: '0.5s' }}>
        {beerList}
      </ul>
    </>
  )
}

function Form ({ addBeer }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addBeer(name);

    setName("")

  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>추가</button>
    </form>
  )
}

function Beer({ beer, deleteBeer }) {

  const [collapsed, setCollapsed] = useState(false);

  const itemStyle = {
    height: collapsed ? '0' : '50px',
    borderBottom: collapsed ? 'none' : '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    overflow: 'hidden',
    transition: '0.2s',
    
  }

  const buttonStyle = {
    border: 'none',
    color: '#f00',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontWeight: '600',
  }

  function handleClick() {
    setCollapsed(true);

    // 애니메이션 작동 시간동안 보류
    setTimeout(() => {
      deleteBeer(beer.id)
    }, 500)

  }

  return (
    <li style={itemStyle}>
      {beer.name}
      <button style={buttonStyle} onClick={handleClick}>
        삭제
      </button>
    </li>
  )
} 