'use strict';

const { createElement, forwardRef } = require('react');

const TabTitle = forwardRef(function TabTitle(
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
    createElement('path', {"d":"M9.492411646966502,1.997565476299314h7.116250915079945c.911351166319946,0,1.773289868138818.414269157099625,2.342606428330328,1.125914857337193l2.441874542459118,3.052343178074807c.425551315500343.531939144388161.657393571669672,1.192870657007006.657393571669672,1.874085142662807v.947656821925193","key":"0"}),
    createElement('path', {"d":"M20.050537104505565,21.997565476299314H4.050537104505565c-1.104569499659192,0-2-.895430500338989-2-2V3.997565476299314c0-1.104569499661011.895430500340808-2,2-2h5c.91135116633086,0,1.773289868129723.414269157099625,2.342606428330328,1.125914857333555l2.198536228250305,2.74817028533289c.569316560198786.71164570023484,1.431255262010382,1.125914857333555,2.342606428329418,1.125914857333555h4.11625091508995c1.104569499661011,0,2,.895430500338989,2,2v11c0,1.104569499661011-.895430500338989,2-2,2Z","key":"1"}),
    createElement('line', {"x1":"6.050537104505565","y1":"5.997565476299314","x2":"9.050537104505565","y2":"5.997565476299314","key":"2"})
  );
});

TabTitle.displayName = 'TabTitle';

module.exports = TabTitle;
module.exports.TabTitle = TabTitle;
module.exports.default = TabTitle;
