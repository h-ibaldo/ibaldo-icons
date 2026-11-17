'use strict';

const { createElement, forwardRef } = require('react');

const BrowserWindowBulbCta2 = forwardRef(function BrowserWindowBulbCta2(
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
    createElement('path', {"d":"M5.999999993649908,21.998779299956368h-2c-1.104569499660101,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499664649.895430500339899-2,2-2h16c1.104569499660101,0,2,.895430500335351,2,2v16c0,1.104569499661011-.895430500339899,2-2,2h-2","key":"0"}),
    createElement('line', {"x1":"10.999999993649908","y1":"21.998779299956368","x2":"12.999999993649908","y2":"21.998779299956368","key":"1"}),
    createElement('circle', {"cx":"11.999999993649908","cy":"15.998779299956368","r":"3","key":"2"}),
    createElement('line', {"x1":"17.999999993649908","y1":"15.998779299956368","x2":"18.999999993649908","y2":"15.998779299956368","key":"3"}),
    createElement('line', {"x1":"4.999999993649908","y1":"15.998779299956368","x2":"5.999999993649908","y2":"15.998779299956368","key":"4"}),
    createElement('line', {"x1":"16.242640680859949","y1":"11.756138612930954","x2":"16.949747462070263","y2":"11.049031831760658","key":"5"}),
    createElement('line', {"x1":"11.999999993920028","y1":"9.99877929995273","x2":"11.999999993960046","y2":"8.998779299956368","key":"6"}),
    createElement('line', {"x1":"7.757359306810031","y1":"11.756138612552604","x2":"7.050252525679753","y2":"11.049031831316825","key":"7"}),
    createElement('line', {"x1":"4.98473144503987","y1":"4.923217770028714","x2":"4.974731445039652","y2":"4.923217770028714","key":"8"}),
    createElement('line', {"x1":"7.98473144503987","y1":"4.923217770028714","x2":"7.974731445039652","y2":"4.923217770028714","key":"9"}),
    createElement('line', {"x1":"18.974731445039652","y1":"4.923217770028714","x2":"10.974731445039652","y2":"4.923217770028714","key":"10"})
  );
});

BrowserWindowBulbCta2.displayName = 'BrowserWindowBulbCta2';

module.exports = BrowserWindowBulbCta2;
module.exports.BrowserWindowBulbCta2 = BrowserWindowBulbCta2;
module.exports.default = BrowserWindowBulbCta2;
