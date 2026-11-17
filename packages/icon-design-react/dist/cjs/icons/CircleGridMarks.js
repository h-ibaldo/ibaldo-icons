'use strict';

const { createElement, forwardRef } = require('react');

const CircleGridMarks = forwardRef(function CircleGridMarks(
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
    createElement('circle', {"cx":"5.97473144523974","cy":"17.999999999911324","r":"3.999999999999773","key":"0"}),
    createElement('circle', {"cx":"17.97473144523974","cy":"18.000000000989075","r":"4.000000000000227","key":"1"}),
    createElement('circle', {"cx":"17.97473144523974","cy":"6.000000000448836","r":"3.999999999999773","key":"2"}),
    createElement('circle', {"cx":"5.97473144523974","cy":"6.000000000448836","r":"3.999999999999773","key":"3"}),
    createElement('line', {"x1":"17.97473144523974","y1":"18.010000000988839","x2":"17.97473144523974","y2":"18.000000000988621","key":"4"}),
    createElement('line', {"x1":"3.146304320180207","y1":"20.828427124340124","x2":"8.803158570300184","y2":"15.171572875481615","key":"5"}),
    createElement('line', {"x1":"15.146304320430318","y1":"8.828427125131384","x2":"20.803158570050073","y2":"3.171572875765378","key":"6"}),
    createElement('line', {"x1":"20.803158569789957","y1":"8.828427125386952","x2":"15.146304320680429","y2":"3.171572875513448","key":"7"})
  );
});

CircleGridMarks.displayName = 'CircleGridMarks';

module.exports = CircleGridMarks;
module.exports.CircleGridMarks = CircleGridMarks;
module.exports.default = CircleGridMarks;
