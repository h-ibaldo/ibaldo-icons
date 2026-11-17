'use strict';

const { createElement, forwardRef } = require('react');

const BellXDash = forwardRef(function BellXDash(
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
    createElement('line', {"x1":"19.974731449501633","y1":"17.000000000480213","x2":"3.974731449501633","y2":"17.000000000480213","key":"0"}),
    createElement('path', {"d":"M17.974731449501633,17.000000000480213v-8.000006000002031c0-3.313705185279105-2.686288814723412-5.999993999997969-5.999993999997969-5.999993999997969h-.000012000001334c-3.313705185274557,0-5.999994000000697,2.686288814718864-5.999994000000697,5.999993999997969v8.000006000002031","key":"1"}),
    createElement('line', {"x1":"9.974731449501633","y1":"21.000000000480213","x2":"13.974731449501633","y2":"21.000000000480213","key":"2"}),
    createElement('line', {"x1":"9.974731449501633","y1":"12.000000000480213","x2":"13.974731449501633","y2":"8.000000000480213","key":"3"}),
    createElement('line', {"x1":"13.974731449501633","y1":"12.000000000480213","x2":"9.974731449390674","y2":"8.000000000589353","key":"4"})
  );
});

BellXDash.displayName = 'BellXDash';

module.exports = BellXDash;
module.exports.BellXDash = BellXDash;
module.exports.default = BellXDash;
