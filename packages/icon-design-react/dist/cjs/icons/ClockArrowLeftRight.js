'use strict';

const { createElement, forwardRef } = require('react');

const ClockArrowLeftRight = forwardRef(function ClockArrowLeftRight(
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
    createElement('polyline', {"points":"11.949523925779431 6.999999999887223 11.949523925779431 11.999999999887223 16.949523925779431 11.999999999887223","key":"0"}),
    createElement('polyline', {"points":"3.99999999973079 14.000000000069122 1.99999999981992 16.000000000158252 3.999999999909051 18.000000000069122","key":"1"}),
    createElement('line', {"x1":"7.99999999981992","y1":"15.999999999887223","x2":"1.99999999981992","y2":"16.000000000158252","key":"2"}),
    createElement('polyline', {"points":"12 21.99999999965803 14.000000000090949 19.999999999748979 12.00000000018008 17.99999999965803","key":"3"}),
    createElement('line', {"x1":"8.000000000090949","y1":"19.99999999947795","x2":"14.000000000090949","y2":"19.999999999748979","key":"4"}),
    createElement('path', {"d":"M18,19.948730468637223c2.396240234380457-1.826904296878638,3.949523925779431-4.702880859378638,3.949523925779431-7.94873046875,0-5.522827148439319-4.477111816398974-10-10-10C6.764282226560681,1.999999999887223,2.501892089840112,5.946777343637223,2,10.999999999887223","key":"5"})
  );
});

ClockArrowLeftRight.displayName = 'ClockArrowLeftRight';

module.exports = ClockArrowLeftRight;
module.exports.ClockArrowLeftRight = ClockArrowLeftRight;
module.exports.default = ClockArrowLeftRight;
