import { combineReducers, createStore } from 'redux';
import Handlebars from 'handlebars';
const source = `<div class="oprate"><p>文章总数{{posts.length}}</p>
{{#if posts}}
<ul>
    {{#each posts}}
    <li>
        {{this.id}} -----------------{{this.title}}
    </li>
    {{/each}}
</ul>
{{/if}}
<p>用户信息：是否登录：{{user.isLogin}}</p>\
{{# if user.isLogin}}
    用户名称：{{user.userData.name}}  用户邮箱：{{user.userData.email}}
{{/if}}
</div>`;
const DIV = document.getElementById("root");
const template = Handlebars.compile(source);

function displayPage(data){
    const html = template(data);
    
    DIV.innerHTML += html;
}
//初始化状态
const initalPostState = [];
const initalUserState = {
    isLogin:false,
    userData:{}
}

//action
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const USER_LOGIN = 'USER_LOGIN';

//设置3个对应的action
let createPostAction = {
    type:CREATE_POST,
    data:{
        id:"1",
        title:"new title"
    }
}
let deletePostAction = {
    type:DELETE_POST,
    id:"1"
}
let userLoginAction = {
    type:USER_LOGIN,
    data:{
        name:"wanggang",
        email:"wanggang@126.com"
    }
}

//action creator
function createPost (data){
    return {
        type:createPostAction.type,
        data:data
    }
}
function deletePost(id){
    return {
        type:deletePostAction.type,
        id:id
    }
}
function userLogin(data){
    return {
        type:userLoginAction.type,
        data:data
    }
}

//store
function posts(state= initalPostState,action){
    switch(action.type){
        case CREATE_POST:
            return [...state,action.data];
        case DELETE_POST:
            return state.filter((post)=>{return post.id != action.id});
        default:
            return state;
    }
}

function user(state = initalUserState,action){
    switch (action.type){
        case USER_LOGIN:
            return Object.assign({},state,{
                isLogin:true,
                userData:action.date
            })
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    posts,
    user
})
//创建store,reducer这个纯函数作为参数
const store = createStore(rootReducer);

DIV.innerHTML += '<h2>初始化状态</h2>';

displayPage(store.getState());

//监听store的变化，每次变化之后把变化的状态打印出来；
store.subscribe(()=>{
    displayPage(store.getState());
    console.log(store.getState());
})

DIV.innerHTML += '<h2>创建两篇文章</h2>';
//创建一篇文章
store.dispatch(createPost(createPostAction.data));
//在创建一篇文章
store.dispatch(createPost({id:"2",title:"second title"}));



DIV.innerHTML += '<h2>删除一篇文章</h2>';
//删除第一篇文章
store.dispatch(deletePost("1"));
DIV.innerHTML += '<h2>用户登录</h2>';
//用户登录
store.dispatch(userLogin(userLoginAction.data));