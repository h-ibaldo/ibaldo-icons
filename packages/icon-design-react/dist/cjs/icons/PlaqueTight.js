'use strict';

const { createElement, forwardRef } = require('react');

const PlaqueTight = forwardRef(function PlaqueTight(
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
    createElement('line', {"x1":"7.999999981000656","y1":"9.999996563432433","x2":"15.999999981000656","y2":"9.999996563432433","key":"0"}),
    createElement('line', {"x1":"7.999999981000656","y1":"13.999996563432433","x2":"15.999999981000656","y2":"13.999996563432433","key":"1"}),
    createElement('path', {"d":"M21.999999981000656,15.999996563432433V7.999996563432433c-1.104553222650793,0-2-.89544677734375-2-2H3.999999981000656c0,1.10455322265625-.895446777340112,2-2,2v8c1.104553222659888,0,2,.8953857421875,2,2h16c0-1.1046142578125.895446777349207-2,2-2Z","key":"2"})
  );
});

PlaqueTight.displayName = 'PlaqueTight';

module.exports = PlaqueTight;
module.exports.PlaqueTight = PlaqueTight;
module.exports.default = PlaqueTight;
