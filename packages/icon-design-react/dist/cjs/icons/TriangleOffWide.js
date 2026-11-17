'use strict';

const { createElement, forwardRef } = require('react');

const TriangleOffWide = forwardRef(function TriangleOffWide(
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
    createElement('line', {"x1":"2.000000004471076","y1":"22.000000003885361","x2":"22.000000004471076","y2":"5.000000003886271","key":"0"}),
    createElement('path', {"d":"M3.889221195880964,20.394165042952409c.602783203108629.378601074214203,1.32135009763806.605834960932953,2.120544433590112.605834960932953h11.98046875c3.09716796875,0,5.019287109369543-3.36846923828125,3.443664550768517-6.034912109375l-3.730407714840112-6.31304931640625","key":"1"}),
    createElement('path', {"d":"M15.913757328678912,5.623291019511271l-.470031738279431-.795471191405341c-1.548278808590112-2.6201171875-5.339172363268517-2.6201171875-6.887451171880457,0L2.566101078678912,14.965087894510361c-.468444824207836.79278564453125-.621643066409888,1.646606445317047-.532775878909888,2.45654296875","key":"2"})
  );
});

TriangleOffWide.displayName = 'TriangleOffWide';

module.exports = TriangleOffWide;
module.exports.TriangleOffWide = TriangleOffWide;
module.exports.default = TriangleOffWide;
