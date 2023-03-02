import ReactDOM from 'react-dom';
import React from 'react';
import App from   './App';

export function render(element,app, layout, getSheets,sheetNavigation) {
  ReactDOM.render(<App element={element} app={app} layout={layout} getSheets = {getSheets} sheetNavigation = {sheetNavigation}/>, element);
}


