'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarJoinedBase = forwardRef(function ChartBarJoinedBase(
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
    createElement('polyline', {"points":"20.016630450567391 22.000000000389264 20.016630451375022 4.000000000389264 15.016630451375022 4.000000000170985 15.016630451153105 9.000000000170985 10.016630451153105 8.999999999938154 10.016630450927551 13.999999999938154 5.016630450927551 13.999999999719876 5.016630450567391 21.999999999719876","key":"0"}),
    createElement('line', {"x1":"2.516630450567391","y1":"21.999999999628926","x2":"21.516630450567391","y2":"22.000000000480213","key":"1"}),
    createElement('line', {"x1":"15.016630451153105","y1":"9.000000000170985","x2":"15.016630450567391","y2":"22.000000000170985","key":"2"}),
    createElement('line', {"x1":"10.016630450927551","y1":"13.999999999938154","x2":"10.016630450567391","y2":"21.999999999938154","key":"3"})
  );
});

ChartBarJoinedBase.displayName = 'ChartBarJoinedBase';

module.exports = ChartBarJoinedBase;
module.exports.ChartBarJoinedBase = ChartBarJoinedBase;
module.exports.default = ChartBarJoinedBase;
