'use strict';

const { createElement, forwardRef } = require('react');

const BackspaceCompact = forwardRef(function BackspaceCompact(
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
    createElement('path', {"d":"M20.066798314910557,19.000000000448381h-12.042401496100865c-.605486311489585,0-1.178376379439214-.274299335983414-1.558022368399179-.745979944521423l-4.024396828021054-5c-.589303508790181-.732163767607744-.589303508790181-1.7758763433485,0-2.508040110958973l4.024396828021054-5c.379645988959965-.471680608538009.952536056909594-.745979944519604,1.558022368399179-.745979944519604h12.042401496100865c1.104569499659192,0,2,.895430500338989,2,2v10c0,1.104569499661011-.895430500340808,2-2,2Z","key":"0"}),
    createElement('line', {"x1":"16.999999990659489","y1":"9.000000000582077","x2":"10.999999990930519","y2":"15.000000000313776","key":"1"}),
    createElement('line', {"x1":"10.999999990790457","y1":"9.000000000715772","x2":"16.999999990799552","y2":"15.00000000018008","key":"2"})
  );
});

BackspaceCompact.displayName = 'BackspaceCompact';

module.exports = BackspaceCompact;
module.exports.BackspaceCompact = BackspaceCompact;
module.exports.default = BackspaceCompact;
