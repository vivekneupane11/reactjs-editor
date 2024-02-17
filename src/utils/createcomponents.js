import React from "react";

export  const createComponents = (domElement) => {
    let children = [];
    if (
      domElement?.props?.children?.length > 0 &&
      typeof domElement?.props?.children !== "string"
    ) {
      const elements = domElement?.props?.children.map((child) => {
        if (!child.type) return child;
        return createComponents(child);
      });
      children = [...elements];
    }
  
    // Need to clone
    const properties = { ...domElement?.props } || {};
  
    // To satisfy React warning that children should have a key
    properties.key = Date.now() + "." + Math.random(1000);
  
    let tagName = domElement?.type?.toLowerCase();
  
    return tagName? React.createElement(
      tagName || '',
      properties,
      children.length > 0 ? children : null
    ):null;
  };