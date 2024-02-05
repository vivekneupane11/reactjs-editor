<h1 align="center" >
  <br>
  <a href="https://www.npmjs.com/package/reactjs-editor"><img src="https://raw.githubusercontent.com/vivekneupane11/qanuny/main/REACT.png" alt="ReactjsEditor"  width="200"></a>
  <br>
  ReactJSEditor
  <br>
</h1>



<h4 align="center">React package to highlight text,make text bold,add comment to text.<a href="https://react-editor-kappa.vercel.app/" target="_blank">View Demo</a>.</h4>



<p align="center">

  <a href="https://www.linkedin.com/in/vivek-neupane-b99259194/">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.buymeacoffee.com/vivekneupaw">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>

---

![screenshot](https://raw.githubusercontent.com/vivekneupane11/qanuny/main/ScreenRecording2024-02-03at19.15.58-ezgif.com-video-to-gif-converter%20(1).gif)


---

#  Get Started 👨🏻‍✈️



### 🛠️🛠️ Installation and Setup 🌱🌱
<br>

```
$ npm i reactjs-editor
```

<br>

 
  ###  <div style="margin-top: 20px;">  ⏭️ ⏭️ For javascript project. Your setup is successful</div>
  ###  🦄✨🧙🏼‍♀️ Go see USAGE section directly 
<br>

  ## <div style="margin-top:50px;">However in typescript you will probably get this error while trying to import package  </div>

  ### <div style="background:red;padding:10px;color:#fff;">⚠️⚠️⚠️ Could not find a declaration file for module 'reactjs-editor'. ⚠️⚠️⚠️  </div>

<br>
<br>
<details>
   <summary style="color:blue;font-size:36px;font-weight:bold;font-style:italic; text-decoration:underline;"> ⬇️ ⬇️ ⬇️ CLICK TO FIX TYPE DECLARATION ERROR</summary>
  
  
  ```
  -----------------------------  FIRST STEP: -------------------------------


  1. Create a new file reacteditor.d.ts  in project root directory

  2. Add this line below in the file  📝📝

  declare module 'reactjs-editor';    //add this line and save
  

 ----------------------------- SECOND STEP: -------------------------------

  1. Now open tsconfig.json file and just include path ➕➕➕

   "include": [
    "src",
    "./reacteditor.d.ts"  //Add this line and save
    ...
   ] 
```
  
</details>


#### 


#### 👩🏿‍🔧👩🏿‍🔧 After this configuration setup, typescript won't show type error 

---

<br>
<br>


# <div style="margin-top: 70px;">🦄✨🧙🏼‍♀️ USAGE  🦄✨🧙🏼‍♀️ </div> 



### Import Package in your project

```
$ import { Editor } from 'reactjs-editor';

```

### <div style="margin-top: 30px;"> Use Editor component and insert any html content </div>




```
   <Editor
        htmlContent={`<main> 
          <h1>Welcome to My Website</h1>
          <p>This is a paragraph of text in HTML. It's simple and easy to create.</p>
          <p>HTML stands for HyperText Markup Language. It's the standard markup language for  creating web pages.</p>
          <p>In HTML, you can create different types of elements such as headings, paragraphs, links, lists, and more to structure and format your content.</p>
         </main>`}
      />

```

### <div style="margin-top: 70px;"> 🎉🎉🎉 Easy Peasy   🎉🎉🎉 Check it out </div>

<br><br>

---
###  <div style="margin-top: 60px; padding:20px; margin-bottom:20px;border:2px solid yellow;">  <div style="color:red;"> 🚨🚨🚨 Note: ⚠️⚠️  Its important: </div>  <br>🚨🚨🚨 Make sure your htmlContent is wrapped inside main tag <br> <br>  ✅✅✅ <br><br> ` htmlContent={ ` <br>` <main> `<br>`{ *** all your html content here *** }`<br>`</main> `<br>`}` <br> <br> ✅✅✅ </div>

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

## Support

<a href="https://www.buymeacoffee.com/vivekneupaw" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>


## License

MIT

---

> [vivekneupane11@gmail.com](https://portfolio-seven-phi-43.vercel.app/) &nbsp;&middot;&nbsp;
> GitHub [@vivekneupane11](https://github.com/vivekneupane11) &nbsp;&middot;&nbsp;
