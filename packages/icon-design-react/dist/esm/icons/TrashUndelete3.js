import { createElement, forwardRef } from 'react';

const TrashUndelete3 = forwardRef(function TrashUndelete3(
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
    createElement('polyline', {"points":"22.00000000018008 4.000000000393811 15.00000000018008 4.000000000709406 15.000000000090949 2.000000000709406 9.000000000090949 2.000000000980435 9.00000000018008 4.000000000980435 2.00000000018008 4.000000001292392","key":"0"}),
    createElement('path', {"d":"M10.00000000098953,22.000000000484761l-4,.00000000062937c-1.104569499659192.000000000049113-2.000000000040018-.895430500249859-2.00000000008913-1.99999999991087l-.00000000072032-16.000000000002728","key":"1"}),
    createElement('line', {"x1":"20.00000000018008","y1":"4.000000000484761","x2":"20.00000000098953","y2":"9.000000000484761","key":"2"}),
    createElement('polyline', {"points":"11.00000000054024 13.000000001741682 11.00000000054024 16.000000001739863 14.00000000054024 16.000000001739863","key":"3"}),
    createElement('path', {"d":"M12.100769043510809,16.000000001741682c.46337890625-2.28216552734375,2.480346679689319-4,4.899230957029431-4,2.761413574220569,0,5,2.23858642578125,5,5s-2.238586425779431,5-5,5c-1.630493164060681,0-3.064636230470569-.792236328125-3.977355957029431-2","key":"4"})
  );
});

TrashUndelete3.displayName = 'TrashUndelete3';

export default TrashUndelete3;
export { TrashUndelete3 };
