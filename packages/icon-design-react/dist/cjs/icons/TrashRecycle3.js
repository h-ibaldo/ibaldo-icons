'use strict';

const { createElement, forwardRef } = require('react');

const TrashRecycle3 = forwardRef(function TrashRecycle3(
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
    createElement('path', {"d":"M8.00000000018008,22.000000000709406h-2c-1.104569499659192,0-2-.89543050033808-2-2V6.000000000710315","key":"0"}),
    createElement('line', {"x1":"16.00000000018008","y1":"6.000000000710315","x2":"16.00000000018008","y2":"9.000000000709406","key":"1"}),
    createElement('line', {"x1":"2.00000000018008","y1":"6.000000000710315","x2":"18.00000000018008","y2":"6.000000000710315","key":"2"}),
    createElement('path', {"d":"M13.00000000018008,6.000000000710315v-2.35392100772151c0-.909104324453438-.736974667830509-1.646078992279399-1.646078992280309-1.646078992279399h-2.707842015450296c-.9091043244498,0-1.646078992269395.736974667825962-1.646078992269395,1.646078992279399v2.35392100772151","key":"3"}),
    createElement('g', {"key":"4"},
      createElement('polyline', {"points":"22.00000000018008 12.000000000709406 22.00000000018008 15.000000000706677 19.00000000018008 15.000000000706677","key":"0"}),
      createElement('polyline', {"points":"11.00000000018008 21.000000000709406 11.00000000018008 18.000000000710315 14.00000000018008 18.000000000710315","key":"1"}),
      createElement('path', {"d":"M21.577880859549623,15.000000000709406c-.772216796869543-1.764404296875-2.528686523439319-3-4.577880859369543-3-1.630493164069776,0-3.064636230470569.792236328125-3.977355957029431,2","key":"2"}),
      createElement('path', {"d":"M12.100769043150649,18.000000000709406c.46337890625,2.282165527342841,2.480346679680224,4,4.899230957029431,4,2.047790527340112,0,3.796447753900793-1.237548828125,4.5693359375-3","key":"3"}))
  );
});

TrashRecycle3.displayName = 'TrashRecycle3';

module.exports = TrashRecycle3;
module.exports.TrashRecycle3 = TrashRecycle3;
module.exports.default = TrashRecycle3;
