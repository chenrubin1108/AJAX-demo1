// 用ajax请求css
let challenge=document.querySelector('button')
challenge.onclick=function() {
console.log('111')
    let xml=new XMLHttpRequest();
    xml.open('GET','/AJAX-demo1/style.css',true)
    
    xml.onload=()=>{
      console.log('成功了')
    }
    xml.onerror=()=>{
        console.log('失败了')
    }
    xml.send()
//// 为什么下面代码放到onload外面就不行就不行了呢
// 先发起了ajax请求 然后执行你注释下面的内容 这时候你的请求还没有获取到
// 
// onload 和onerror 不够用,当你错误的请求,比如地址写错了了 并不会触发onerror
// 历史原因AJAX是后发明的,onload之前就有,所以会使用onreadystatechange
  let style=document.createElement('style')
  style.innerHTML=xml.response
  document.body.appendChild(style);
  console.log(xml.response)
  console.log('成功')
}
getJS.onclick= ()=>{
    const request= new XMLHttpRequest()
    request.open('GET','js.js')
    // 快捷键 request.onrea tab 健快速打出来
    request.onreadystatechange=()=>{
        // request.readystate 只是代表下载完成,但是不代表请求成功了,监听状态码要用 request.status
        if(request.readyState==4) {
      
        if(request.status>=200 && request.status<300) {
            console.log('下载完成')
            const script =  document.createElement('script')
            script.innerHTML=request.response
            document.body.appendChild(script)
        }else {
            alert('请求失败了')
        }
        }
    }
    request.onerror=()=>{
        console.log('失败了')
    }
    request.send()
}

getHTML.onclick=()=>{
    const  request=new XMLHttpRequest()
    request.open('GET','3.html')
    request.onload=()=>{
        const div= document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
        console.log(request.response)
    }
    request.onerror=()=>{
        console.log('失败监听')
    }
    request.send()
}
getxml.onclick=()=>{
    const request= new XMLHttpRequest()
    request.open('get','x.xml')
    request.onreadystatechange=()=>{
            if(request.status===200 && request.readyState==4) {
                // dom 分为 xml的dom 和html的dom对象
            const dom=request.responseXML;
            const text=dom.querySelector('warning')
                console.log(text.textContent)
        }
    }
    request.send()
}
getJSOn.onclick=()=>{
    const xml= new XMLHttpRequest()
    xml.open('get','1.json')
    xml.onreadystatechange=()=>{
        if(xml.status===200 &&xml.readyState===4) {
            let text= JSON.parse(xml.response) 
            console.log(text)
            jsoncontent.textContent=text.name
        }
    }
    xml.send()
}