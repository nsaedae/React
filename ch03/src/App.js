import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import MyFuncComponent from './components/MyFuncComponent';
import ComponentParent from './components/ComponentParent';

/*
  날짜 : 2022/05/10
  이름 : 김철학
  내용 : React 컴포넌트 실습하기

  컴포넌트(Component)
   - UI 또는 기능을 독립적으로 나뉜 모듈형태
   - 컴포넌트는 클래스형과 함수형으로 나뉨
*/
function App() {
  return (
    <div>
      <h3>ch03.React 컴포넌트 실습</h3>

      <h4>클래스형 컴포넌트</h4>
      <MyClassComponent/>

      <h4>함수형 컴포넌트</h4>
      <MyFuncComponent/>

      <h4>부모, 자식 컴포넌트</h4>
      <ComponentParent/>

    </div>
  );
}

export default App;
