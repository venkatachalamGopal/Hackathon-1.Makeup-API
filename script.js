// const url="http://makeup-api.herokuapp.com/api/v1/products.json";

const body=document.getElementById('body')
const input=document.createElement("input");
input.setAttribute('type','text')
input.setAttribute('id','search')
input.setAttribute('placeholder','Search brandname nyx,covergirl,etc,,')

const btn=document.createElement("button")
btn.setAttribute('onclick','getvalue()')
btn.innerText='Search'
body.append(input)
body.append(btn)

let mainDiv=document.createElement('div')
mainDiv.setAttribute('class','mainDiv')
body.append(mainDiv)

async function getvalue(){
try {
    const brandName=document.getElementById('search').value;
    console.log(brandName);
    const url1=`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`

    const request=await fetch(url1)
    const resp=await request.json();
    // ErrorCheck
    if(resp.length==0){
        let paraE=document.createElement('p')
        paraE.setAttribute('class','errorMessage')
        paraE.innerHTML=`Brand Name : <span class='Bname'>${brandName}</span> - not matched !!!! please type correctly.`
        mainDiv.appendChild(paraE)

    }else{
        resp.map((obj,index)=>{
        const div=document.createElement('div')
        const list=document.createElement("li");
        list.setAttribute('id','brandName');
        list.innerText=`Brand name : ${obj.brand}`;
        const list1=document.createElement("li");
        list1.innerHTML=`<span>Product name</span> : ${obj.name}`
        const list2=document.createElement("li");
        list2.innerHTML=`<span>Price</span> $ : ${obj.price}`
        const list3=document.createElement("li");
        list3.innerHTML=`<img src='${obj.image_link}' alt='${obj.name}'>`
        const list4=document.createElement("li");
        list4.innerHTML=`<a href='${obj.product_link}' target='_blank'>Product Link</a>`
        const list5=document.createElement("li");
        list5.innerHTML=`<span>Description</span> :- ${obj.description}`
    
        // body.append(mainDiv)    
        mainDiv.appendChild(div)
        div.appendChild(list)
        div.appendChild(list3)
        div.appendChild(list2)
        div.appendChild(list1)
        
        div.appendChild(list4)
        div.appendChild(list5)
    })
    

    }

    
    } catch (error) {
        console.log(error);}
}



