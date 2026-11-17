'use strict';

const { createElement, forwardRef } = require('react');

const BrowserWindowFlashlight2 = forwardRef(function BrowserWindowFlashlight2(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M6,22h-2c-1.104569499660101,0-2-.895430500338989-2-2V4c0-1.104569499664649.895430500339899-2,2-2h16c1.104569499660101,0,2,.895430500335351,2,2v16c0,1.104569499661011-.895430500339899,2-2,2h-2","key":"0"}),
    createElement('line', {"x1":"2","y1":"8","x2":"22","y2":"8","key":"1"}),
    createElement('path', {"d":"M8,12h8v2l-2,2v5c0,.552284749828686-.447715250169495,1-1,1h-2c-.552284749830505,0-1-.447715250171314-1-1v-5l-2-2v-2Z","key":"2"}),
    createElement('line', {"x1":"14","y1":"16","x2":"10","y2":"16","key":"3"}),
    createElement('line', {"x1":"4.98473144503987","y1":"4.923217770028714","x2":"4.974731445039652","y2":"4.923217770028714","key":"4"}),
    createElement('line', {"x1":"7.98473144503987","y1":"4.923217770028714","x2":"7.974731445039652","y2":"4.923217770028714","key":"5"}),
    createElement('line', {"x1":"18.974731445039652","y1":"4.923217770028714","x2":"10.974731445039652","y2":"4.923217770028714","key":"6"})
  );
});

BrowserWindowFlashlight2.displayName = 'BrowserWindowFlashlight2';

module.exports = BrowserWindowFlashlight2;
module.exports.BrowserWindowFlashlight2 = BrowserWindowFlashlight2;
module.exports.default = BrowserWindowFlashlight2;
