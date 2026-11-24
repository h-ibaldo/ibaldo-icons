'use strict';

const { createElement, forwardRef } = require('react');

const TrashBanDetached = forwardRef(function TrashBanDetached(
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
    createElement('path', {"d":"M8.97473145010008,22.000000000459295h-2.000000000020009c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023","key":"0"}),
    createElement('line', {"x1":"15.97473145010008","y1":"6.000000000462023","x2":"15.97473145010008","y2":"9.000000000459295","key":"1"}),
    createElement('line', {"x1":"2.974731450080071","y1":"6.000000000462023","x2":"17.97473145010008","y2":"6.000000000462023","key":"2"}),
    createElement('line', {"x1":"7.97473145010008","y1":"2.000000000459295","x2":"12.97473145010008","y2":"2.000000000459295","key":"3"}),
    createElement('circle', {"cx":"15.941799467210103","cy":"17.032932035377598","r":"5.032931982879632","key":"4"}),
    createElement('line', {"x1":"12.382979132779838","y1":"20.591752369644382","x2":"19.500619801639914","y2":"13.474111701115362","key":"5"})
  );
});

TrashBanDetached.displayName = 'TrashBanDetached';

module.exports = TrashBanDetached;
module.exports.TrashBanDetached = TrashBanDetached;
module.exports.default = TrashBanDetached;
