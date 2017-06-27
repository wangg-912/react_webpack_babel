import React, { PropTypes } from 'react';
import Hobby from './Hobby';


const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

class Profile extends React.Component {
   constructor(props) {
    super(props);//使用super方法完成继承
    this.state = { //state是组件内部属性
      liked: 0,
      hobbies:["王刚","张三","李四"]
    };
    this.likedCallback = this.likedCallback.bind(this);//为当前组件绑定点赞方法
    this.addHobbyCallback = this.addHobbyCallback.bind(this); //为当前组件绑定添加方法
  }

  componentDidMount() {//组件的生命周期，当组件加载完毕后，自动点赞一次
    setTimeout(()=> {
       this.likedCallback();
    }, 1000);
  }
  likedCallback(){
    let liked = this.state.liked;//获取内部state属性
    liked ++;
    this.setState({ //设置最新的state属性
      liked
    })
  }

  addHobbyCallback(){
    let inputHobby = this.refs.hobby;
    let inputVlaue = inputHobby.value;
    if(inputVlaue){
      let hobbies = this.state.hobbies;
      hobbies = [...hobbies,inputVlaue];

      this.setState({hobbies},()=>{
        inputHobby.val = '';
      })
    }
  }
  render() {
    return (
      <div>
        <h1>我的名字叫 {this.props.name}</h1>
        <h2>我今年 {this.props.age} 岁</h2>
        <button onClick={this.likedCallback}>给我点赞</button>
        <h2>总点赞数： {this.state.liked}</h2>
        <h2>我的爱好：</h2>
        <ul>
          {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby} />)}
        </ul>
        <input type="text" ref="hobby" />
        <button onClick={this.addHobbyCallback}>添加爱好</button>
      </div>
    );
  }
}


Profile.propTypes = propTypes;

export default Profile;
