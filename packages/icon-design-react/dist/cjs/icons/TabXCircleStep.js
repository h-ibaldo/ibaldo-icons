'use strict';

const { createElement, forwardRef } = require('react');

const TabXCircleStep = forwardRef(function TabXCircleStep(
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
    createElement('polyline', {"points":"9.0252685320811 21.99877930112325 2.0252685320811 21.99877930112325 2.0252685320811 1.99877930112325 11.0252685320811 1.99877930112325 11.0252685320811 5.99877930112325 22.0252685320811 5.99877930112325 22.0252685320811 8.998779301119612","key":"0"}),
    createElement('line', {"x1":"22.0252685320811","y1":"1.99877930112325","x2":"15.0252685320811","y2":"1.99877930112325","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('circle', {"cx":"16.525268529728237","cy":"16.498779303550691","r":"5.499999997577106","key":"0"}),
      createElement('line', {"x1":"18.025268532150221","y1":"14.99877930112325","x2":"15.025268532150221","y2":"17.99877930112325","key":"1"}),
      createElement('line', {"x1":"15.025268532219343","y1":"14.998779301057766","x2":"18.0252685320811","y2":"17.998779301192371","key":"2"}))
  );
});

TabXCircleStep.displayName = 'TabXCircleStep';

module.exports = TabXCircleStep;
module.exports.TabXCircleStep = TabXCircleStep;
module.exports.default = TabXCircleStep;
