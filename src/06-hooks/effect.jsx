import React, { useState,useEffect, Fragment } from 'react';

export default function(props){
    let [data,setData] = useState({count:0})
 

    //类似于 comDidMounted
    useEffect(()=>{
        console.log('mounted');

       (async()=>{
           let result = await LoadData()
           console.log(result);
       })()
    },[])
   
    //类似于 comUpdate
    useEffect(()=>{
        console.log('Effect');
    },[data])


    //类似于 组件卸载
    useEffect(()=>{
        return ()=>{
            console.log('unmountd');
        }
    },[])

    //页面数据的异步渲染写法

    function LoadData(){
    //    return fetch('http://www.xiaofenggege.com/xfApi/articleList',{ method:'POST', body: ({page:1})}).then(res=> res.json()).then(res=>{
    //        return res;
    //    })
    }



    return (
        <Fragment>
            <h1>React Hooks Effect</h1>
            <span>{data.count}</span> <br/> <br/>
            <button onClick ={()=>setData({count:data.count + 1})}>Click</button>
        </Fragment> 
    )
}