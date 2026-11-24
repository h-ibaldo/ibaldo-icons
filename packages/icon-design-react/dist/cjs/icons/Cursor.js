'use strict';

const { createElement, forwardRef } = require('react');

const Cursor = forwardRef(function Cursor(
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
    createElement('path', {"d":"M21.999988017749274,18.675445533288439l-6.238105170968993-6.238106046710527,4.393056102040646-1.464352034008698c1.031052443839144-.343684147950626,1.073446290669381-1.786388338379766.064353776098869-2.190022123581002L3.37397681424045,2.044892728437844c-.816312543280219-.326522411949554-1.626390388701111.48355933395942-1.29986404625015,1.299870305039803l6.738115974520042,16.845189129660866c.40363760900982,1.009087983869904,1.846336770529888.966690808560088,2.190020037300201-.064358991759946l1.464309808920007-4.392929426750925,6.238105170959898,6.238106046710527,3.295324258058827-3.295324258049732Z","key":"0"})
  );
});

Cursor.displayName = 'Cursor';

module.exports = Cursor;
module.exports.Cursor = Cursor;
module.exports.default = Cursor;
