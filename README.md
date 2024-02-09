<h1 align="center" >
  <br>
  <a href="https://www.npmjs.com/package/reactjs-editor"><img src="https://raw.githubusercontent.com/vivekneupane11/qanuny/main/REACT.png" alt="ReactjsEditor"  width="200"></a>
  <br>
  ReactJSEditor
  <br>
</h1>



<h2 align="center">React package to highlight text,make text bold,add comment to text.<br><a href="https://reactjs-editor-demo.vercel.app/" target="_blank">View Demo</a>.</h4>



<p align="center">

  <a href="https://www.linkedin.com/in/vivek-neupane-b99259194/">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.buymeacoffee.com/vivekneupaw">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>

---

![screenshot](https://raw.githubusercontent.com/vivekneupane11/demo/main/Screenshot%202024-02-10%20at%2000.35.34.png)
 
 ---
 
 ### [▶️ ▶️ Watch the video and see how to use it [TUTORIAL VIDEO] 🎥](https://www.youtube.com/watch?v=iR4xtbGtoU0)
---

###  <a href="https://reactjs-editor-demo.vercel.app/" target="_blank">View Demo Here [!! DEMO DEMO DEMO !!]</a>

---

#  Get Started 👨🏻‍✈️



### 🛠️🛠️ Installation and Setup 🌱🌱
<br>

```
$ npm i reactjs-editor
```

---



# <div style="margin-top: 70px;"> USAGE  🦄✨🧙🏼‍♀️ </div> 



### Import Package in your project

```
$ import { Editor } from 'reactjs-editor';

```

### <div style="margin-top: 30px;"> Use Editor component and insert any html content </div>




```

<Editor
        /** htmlContent accepts only one element. Just wrap everything on one element **/
        htmlContent={`<main>
                      <div style="border-radius:30px;width:50%;padding:30px; margin:40px auto; box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;">
                      <h1 style="color:blue;">Select Text Below and See the Magic</h1>
                      <div style="display:flex;">
                      <aside>
                          <p style="padding:10px;text-align:left;color:#000;line-height:25px;">
                          You can select any text and add comments.You can make text bold. You can use any text using color you choose.These are the feature of React Editor. You can highlight that React Editor if you want to. 
                        </p>
                      </aside>
                      <aside>
                          <p style="padding:10px;text-align:left;color:#000;line-height:25px;">
                          HTML and CSS are fundamental tools in web development, enabling the creation of visually appealing and structured web pages.Tag in HTML is used to define paragraphs, allowing content to be organized into distinct blocks of text.
                          </p>
                        </aside>
                      </div>
                </main>`
              }
      />

```

---

<br>

# <div style="margin-top: 70px;"> 🎉🎉🎉 That's it.   🎉🎉🎉 </div>

<br><br>





#  <div style="margin-top:50px;"> Additional Props for Customizations </div>



### Add your own colors 

```
<Editor
      colors={["black","gold","red"]}
      ....
      />

```

### Make sure to add your class  in your css file

```
/* In your css file */

.black{
    background-color:#000,
    color:#fff,
},
.red{
    background-color:red,
    color:#fff,
}
.gold{
    background-color:gold,
    color:#fff,
}

//add as much as you like

```

---

<br><br>

# <div style="margin-top:70px;"> Get Access to Changed HTML Element. </div>



### 💾  Save user html changes and show them their changes on subsequent visit




```

import { Editor, useDomValue } from 'reactjs-editor';

...

 const { dom, setDom } = useDomValue();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updatedDomValue  = {
    key: dom?.key,
    props: dom?.props,
    ref: dom?.ref,
    type: dom?.type,
  }


  console.log("%j", updatedDomValue );  
  
  // get your changed dom  like this and save it if you like to in your database or some place

```

### Update dom using that  " updatedDomValue " values you saved from above

```

useEffect(()=>{
  function updateDom(updatedDomValue:any){
   setDom(updatedDomValue); //set your dom like this
 
  }
  updateDom(updatedDomValue) // call this function where ever you like

},[])

```

---
<br><br>

# <div style="margin-top:70px;"> If you want to customize designs of all other components such as floating button and modals </div>


```
1. Inspect html element
2. Find className of specific elements
3. Override css present there from your own css files 

 In future update, I will create option to pass all components in a props

```
<br><br>

# Support


<a href="https://www.buymeacoffee.com/vivekneupaw" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<br>

### ✉️ Drop any of your queries/feedback in this gmail. 
## ✉️✉️  Gmail: vivekneupane11@gmail.com

<br> <br>

## License

MIT

---

> [vivekneupane11@gmail.com](https://portfolio-seven-phi-43.vercel.app/) &nbsp;&middot;&nbsp;
> LinkedIn [@vivekneupane11](https://www.linkedin.com/in/vivek-neupane-b99259194/) &nbsp;&middot;&nbsp;
> Youtube [@vivekneupane11](https://www.youtube.com/channel/UCJoQhaR1_Gx8dpeZdrCCXsg) &nbsp;&middot;&nbsp;
>  GitHub [@vivekneupane11](https://github.com/vivekneupane11) &nbsp;&middot;&nbsp;

