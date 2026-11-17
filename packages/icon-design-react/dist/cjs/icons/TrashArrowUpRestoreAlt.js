'use strict';

const { createElement, forwardRef } = require('react');

const TrashArrowUpRestoreAlt = forwardRef(function TrashArrowUpRestoreAlt(
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
    createElement('path', {"d":"M17.97473145010008,6.000000000462023v13.999999999997272c0,1.104569499661011-.895430500339899,2-2,2H7.97473145010008c-1.104569499670106,0-2-.895430500338989-2-2V6.000000000462023","key":"0"}),
    createElement('line', {"x1":"3.97473145010008","y1":"6.000000000462023","x2":"19.97473145010008","y2":"6.000000000462023","key":"1"}),
    createElement('path', {"d":"M14.97473145010008,6.000000000462023v-2.35392100772242c0-.909104324453438-.736974667830509-1.646078992280309-1.646078992280309-1.646078992280309h-2.707842015450296c-.9091043244498,0-1.646078992269395.736974667826871-1.646078992269395,1.646078992280309v2.35392100772242","key":"2"}),
    createElement('polyline', {"points":"9.97473145010008 13.000000000459295 11.974731450090076 11.000000000459295 13.97473145010008 13.000000000459295","key":"3"}),
    createElement('line', {"x1":"11.974731450090076","y1":"17.000000000459295","x2":"11.974731450090076","y2":"11.000000000459295","key":"4"})
  );
});

TrashArrowUpRestoreAlt.displayName = 'TrashArrowUpRestoreAlt';

module.exports = TrashArrowUpRestoreAlt;
module.exports.TrashArrowUpRestoreAlt = TrashArrowUpRestoreAlt;
module.exports.default = TrashArrowUpRestoreAlt;
