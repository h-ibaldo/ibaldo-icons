'use strict';

const { createElement, forwardRef } = require('react');

const Toolbox1 = forwardRef(function Toolbox1(
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
    createElement('path', {"d":"M21.414213562369696,8.414213562367877l-.828427124739392-.828427124739392c-.375072756900408-.375072756900408-.883780582700638-.585786437630304-1.41421356238061-.585786437630304H4.828429780320221c-.530432328991083,0-1.039139585640442.210713165199195-1.414212234580191.58578510983898l-.828429780329316.828428224720483c-.375073569150118.375072864850154-.585787765410714.883781259790339-.585787765410714,1.41421489016102v3.171571775279517h20v-3.171572875249694c0-.530432979679972-.210713680729896-1.039140805480201-.585786437630304-1.41421356238061Z","key":"0"}),
    createElement('rect', {"x":"16","y":"10.999999999998181","width":"1","height":"4","key":"1"}),
    createElement('rect', {"x":"7","y":"10.999999999998181","width":"1","height":"4","key":"2"}),
    createElement('path', {"d":"M3,12.999999999998181v7c0,.552284749830505.447715250169495,1,1,1h16c.552284749830505,0,1-.447715250169495,1-1v-7","key":"3"}),
    createElement('polyline', {"points":"6 6.999999999998181 8 2.999999999998181 16 2.999999999998181 18 6.999999999998181","key":"4"})
  );
});

Toolbox1.displayName = 'Toolbox1';

module.exports = Toolbox1;
module.exports.Toolbox1 = Toolbox1;
module.exports.default = Toolbox1;
