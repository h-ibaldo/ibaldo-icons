'use strict';

const { createElement, forwardRef } = require('react');

const Poll6VerticalSpeech = forwardRef(function Poll6VerticalSpeech(
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
    createElement('line', {"x1":"6","y1":"14.000000000689397","x2":"6.00000000036016","y2":"9.000000000598448","key":"0"}),
    createElement('line', {"x1":"14","y1":"14.000000001045919","x2":"14.000000000130967","y2":"12.000000000689397","key":"1"}),
    createElement('line', {"x1":"18","y1":"14.000000001227818","x2":"18.000000000211003","y2":"10.000000000689397","key":"2"}),
    createElement('line', {"x1":"10","y1":"14.000000000867658","x2":"10.000000000531145","y2":"6.000000000598448","key":"3"}),
    createElement('path', {"d":"M22.000000000560249,5.000000001082299l-.000000000589353,9.999999999552529c-.000000000090949,1.656854249478783-1.34314575064127,2.999999999901775-3.000000000130967,2.999999999829015l-12.999997031949533-.000000000582077-4.000002968079571,3.999999999938154.000000000760338-16.999999999679858c.000000000080036-1.656854249489697,1.343145750648546-2.999999999930878,3.000000000149157-2.999999999858119l13.999999999959982.00000000062937c1.656854249509706.00000000007276,2.999999999959982,1.343145750663098,2.999999999879947,3.000000000170985Z","key":"4"})
  );
});

Poll6VerticalSpeech.displayName = 'Poll6VerticalSpeech';

module.exports = Poll6VerticalSpeech;
module.exports.Poll6VerticalSpeech = Poll6VerticalSpeech;
module.exports.default = Poll6VerticalSpeech;
