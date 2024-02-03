import React from 'react';

const createComponents = (domElement) => {
    if (domElement == undefined || domElement == null || !Object.keys(domElement).length) {
        return [];

    }
    let children = [];
    if (domElement?.children?.length > 0) {
        children = domElement.children.map(child => {
            if (!child.tagName) return child.content;
            return createComponents(child)
        })
    }

    // Need to clone 
    const properties = { ...domElement.attributes } || {}

    // To satisfy React warning that children should have a key
    properties.key = Date.now() + '.' + Math.random(1000)
    // console.log(domElement,children)
    return React.createElement(domElement.tagName, properties, children.length > 0 ? children : 0)


}

const NoteContents = (dom) => {
    if(!dom) return null;


    let renderHTML = createComponents(dom)

    return <> {renderHTML} </>

}



export default NoteContents;