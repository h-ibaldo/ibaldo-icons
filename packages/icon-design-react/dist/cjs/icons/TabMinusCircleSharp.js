'use strict';

const { createElement, forwardRef } = require('react');

const TabMinusCircleSharp = forwardRef(function TabMinusCircleSharp(
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
    createElement('polyline', {"points":"10.0252685320811 21.99877930112325 2.0252685320811 21.99877930112325 2.0252685320811 1.99877930112325 10.0252685320811 1.99877930112325 13.0252685320811 5.99877930112325 22.0252685320811 5.99877930112325 22.0252685320811 9.99877930112325","key":"0"}),
    createElement('polyline', {"points":"15.0252685320811 1.99877930112325 22.0252685320811 1.99877930112325 22.0252685320811 5.99877930112325","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('circle', {"cx":"17.025268532090195","cy":"16.998779306063625","r":"5","key":"0"}),
      createElement('line', {"x1":"19.0252685320811","y1":"16.99877930112325","x2":"15.0252685320811","y2":"16.998779301301511","key":"1"}))
  );
});

TabMinusCircleSharp.displayName = 'TabMinusCircleSharp';

module.exports = TabMinusCircleSharp;
module.exports.TabMinusCircleSharp = TabMinusCircleSharp;
module.exports.default = TabMinusCircleSharp;
