'use strict';

const { createElement, forwardRef } = require('react');

const TrashArrowUpDetached = forwardRef(function TrashArrowUpDetached(
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
    createElement('path', {"d":"M17.97473145010008,6.000000000459295v14c0,1.104569499661011-.895430500339899,2-2,2H7.97473145010008c-1.104569499670106,0-2-.895430500338989-2-2V6.000000000459295","key":"0"}),
    createElement('line', {"x1":"19.97473145010008","y1":"6.000000000459295","x2":"3.97473145010008","y2":"6.000000000459295","key":"1"}),
    createElement('line', {"x1":"8.97473145010008","y1":"2.000000000459295","x2":"13.97473145010008","y2":"2.000000000459295","key":"2"}),
    createElement('polyline', {"points":"9.974731450090076 13.000000000459295 11.974731450080071 11.000000000459295 13.974731450090076 13.000000000459295","key":"3"}),
    createElement('line', {"x1":"11.974731450080071","y1":"17.000000000459295","x2":"11.974731450080071","y2":"11.000000000459295","key":"4"})
  );
});

TrashArrowUpDetached.displayName = 'TrashArrowUpDetached';

module.exports = TrashArrowUpDetached;
module.exports.TrashArrowUpDetached = TrashArrowUpDetached;
module.exports.default = TrashArrowUpDetached;
