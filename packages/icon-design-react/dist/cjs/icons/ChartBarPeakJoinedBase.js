'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarPeakJoinedBase = forwardRef(function ChartBarPeakJoinedBase(
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
    createElement('polyline', {"points":"5.016630450163575 21.000000000010914 5.016630450163575 12.000000000010914 10.016630450163575 12.000000000010914 10.016630450163575 3.000000000010914 15.016630450163575 3.000000000010914 15.016630450163575 8.000000000010914 20.016630450163575 8.000000000010914 20.016630450163575 21.000000000010914","key":"0"}),
    createElement('line', {"x1":"21.766630450163575","y1":"21.000000000050932","x2":"2.266630450163575","y2":"21.000000000040018","key":"1"}),
    createElement('line', {"x1":"10.016630450163575","y1":"12.000000000010914","x2":"10.016630450163575","y2":"21.000000000010914","key":"2"}),
    createElement('line', {"x1":"15.016630450163575","y1":"8.000000000010914","x2":"15.016630450163575","y2":"21.000000000010914","key":"3"})
  );
});

ChartBarPeakJoinedBase.displayName = 'ChartBarPeakJoinedBase';

module.exports = ChartBarPeakJoinedBase;
module.exports.ChartBarPeakJoinedBase = ChartBarPeakJoinedBase;
module.exports.default = ChartBarPeakJoinedBase;
