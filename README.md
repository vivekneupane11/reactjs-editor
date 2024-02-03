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



![screenshot](https://raw.githubusercontent.com/vivekneupane11/qanuny/main/ScreenRecording2024-02-03at19.15.58-ezgif.com-video-to-gif-converter%20(1).gif)


#  Get Started



### Installation and Setup

```
$ npm i reactjs-editor

```

###  <div style="margin-top: 40px;"> 🌟  Note:  ⏭️ Necessary Only For Typescript Project 🌟 </div>

### ⏭️  If your React Project is in Typescript

```
  $ cd <your typescript project root>
  $ touch reacteditor.d.ts  
  $ nano reacteditor.d.ts

  ## Add this line below and save ⬇️ ⬇️

  declare module 'reactjs-editor';    //add this line and save


  ## Now go to tsconfig.json file 
  
  $ cd tsconfig.json  

  ## And just include file you created above  

   "include": [
    "src",
    "./reacteditor.d.ts"  //Add this line 
    ...
   ] 
```


#### <div style="margin-top: 40px;"> 
🎉🎉 Congratulations Setup Completed  🌟 Lets Create Magic Now  </div> 🌟





# <div style="margin-top: 70px;"> Let's create a magic now </div> 



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


## <div style="margin-top: 30px;"> 🎉🎉🎉 That's it.   🎉🎉🎉 </div>
####### 🌟🌟 Go Simran go, live your life 🌟🌟



####  <div style="margin-top: 60px; padding:20px; margin-bottom:20px;border:2px solid yellow;"> 🌟 Note: ⚠️⚠️  Its important:  <br> <br>🌟 Make sure your htmlContent is wrapped inside main tag <br> <hr>  ` htmlContent={ <main>{ *** all your html content }</main>`  </div>


# <div style="margin-top:70px;"> Get Access to Changed HTML Element. </div>


```

import { Editor, useDomValue } from 'reactjs-editor';

...

  const {dom,setDom} = useDomValue()
   console.log("%j", dom);  //get your changed dom  like this and save it if you like to
 
  useEffect(()=>{
setDom( domObject)  //set your dom like this
  },[])

```



#  <div style="margin-top:80px;"> Additional Features for Customizations </div>



## Add your own colors 

```
<Editor
      colors={["black","gold","red"]}
      ....
      />

```

## Then add your class  in your css file

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

```

# <div style="margin-top:70px;"> If you want to customize designs of all other components such as floating button and modals </div>


```
1. Inspect html element
2. Find className of specific elements
3. Override css present there from your own css files 

 In future update, I will create option to pass all components such as a props

```

## Support

<a href="https://www.buymeacoffee.com/vivekneupaw" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>


## License

MIT

---

> [vivekneupane11@gmail.com](https://portfolio-seven-phi-43.vercel.app/) &nbsp;&middot;&nbsp;
> GitHub [@vivekneupane11](https://github.com/vivekneupane11) &nbsp;&middot;&nbsp;
