import React, { Component } from 'react';

class MyComponent1 extends Component {
    //state 선언
    state = {color: '#000', fcolor: 'green', msg: '입력하세요.'}

    // 이벤트 핸들러
    onClickHandler1 = () => {
        alert('클릭2');
    }

    onClickHandler2(){
        alert('클릭3');
    }

    onClickHandler3 = (e) => {
        e.preventDefault();
        alert('클릭4');
    } 

    onToggle = () => {
        if(this.state.color === '#F00'){
            this.setState({color:'#00F'});
        }else{
            this.setState({color:'#F00'});
        }
    }

    render() {

        return (
            <div className='MyComponent1'>
                <h4>MyComponent1 Event</h4>
                {/* click 이벤트 */}
                <h1 style={{color: this.state.color}}>Click!!!</h1>
                <button onClick={() => {alert('클릭1')}}>클릭1</button>
                <button onClick={this.onClickHandler1}>클릭2</button>
                <button onClick={this.onClickHandler2}>클릭3</button>                
                <button onClick={() => {this.setState({color: '#F00'})}}>클릭4</button>
                <button onClick={this.onToggle}>클릭5</button>
                <a href='http://naver.com' onClick={this.onClickHandler3}>클릭6</a>

                {/* mouse 이벤트 */}
                <h1 style={{backgroundColor: this.state.fcolor}}
                    onMouseOver={()=>{this.setState({fcolor:'orange'})}}
                    onMouseOut ={()=>{this.setState({fcolor:'skyblue'})}}>Mouse 이벤트</h1>
                
                {/* change 이벤트 */}
                <h1>{this.state.msg}</h1>
                <input type="text" value={this.state.msg} onChange={(e)=>{
                    this.setState({msg: e.target.value})
                }}/>
               
            </div>
        );
    }
}

export default MyComponent1;