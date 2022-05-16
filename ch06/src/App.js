import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes} from 'react-router-dom';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import Home from './components/Home';
import Query from './components/Query';
import Param from './components/Param';

/*
  날짜 : 2022/05/16
  이름 : 김철학
  내용 : React Router 실습

  React Router
   - SPA(Single Page Application)을 개발하기 위한 화면(컴포넌트) 출력을 Router라고 함
   - 'npm add react-router-dom' 라이브러리 설치
   - 리액트 프로젝트에 Router 기능을 활성화 하기 위해 index.js ---> <BrowserRouter> 감싼다.
*/
function App() {
  return (
    <div className="App">
      <h3>ch06.React Router</h3>

      {/* 상단 import Route를 수동으로 입력 */}
      <p>
        <Link to='/'>home</Link>/
        <Link to='/hello'>hello</Link>/
        <Link to='/welcome'>welcome</Link>/
        <Link to='/greeting'>greeting</Link>/        
      </p>

      <Routes>
        <Route path='/'         element={<Home/>}/>
        <Route path='/hello'    element={<Hello/>}/>
        <Route path='/welcome'  element={<Welcome/>}/>
        <Route path='/greeting' element={<Greeting/>}/>
      </Routes>

      <hr/>
      {/* URL Query */}
      <p>
        <Link to='/query?name=홍길동'>query1</Link>/
        <Link to='/query?name=홍길동&age=21'>query2</Link>/
        <Link to='/query?name=홍길동&age=21&addr=부산'>query3</Link>/
      </p>
      <Routes>
        <Route path='/query' element={<Query/>}/>        
      </Routes>

      <hr/>

      {/* URL Parameter */}
      <p>
        <Link to='/param/김유신'>param1</Link>/
        <Link to='/param/김춘추/23'>param2</Link>/
        <Link to='/param/장보고/31/완도'>param3</Link>/        
      </p>
      <Routes>        
        <Route path='/param/:name' element={<Param/>}/>
        <Route path='/param/:name/:age' element={<Param/>}/>
        <Route path='/param/:name/:age/:addr' element={<Param/>}/>
      </Routes>

    </div>
  );
}

export default App;
