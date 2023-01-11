const posts =[
    {title : 'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
    {title : 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}-last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post, callback){
    setTimeout(() =>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000);
    
}

createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts);

function createPost4(post, callback){
    setTimeout(() =>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000);
    
}
createPost4({title: 'Post Four', body: 'This is Post Four'}, getPosts);