import { createElement, forwardRef } from 'react';

const ClockUnlock = forwardRef(function ClockUnlock(
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
    createElement('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"0"}),
    createElement('rect', {"x":"2","y":"17.999999999887223","width":"7","height":"4","key":"1"}),
    createElement('path', {"d":"M13,21.949462890508585c5.053283691409888-.501831054680224,9-4.76416015625,9-9.949462890621362,0-5.522827148439319-4.477111816409888-10-10-10C7.162170410159888,1.999999999887223,3.127502441409888,5.435546874887223,2.200866699220569,9.999999999887223","key":"2"}),
    createElement('path', {"d":"M7.4892578125,13.999999999887223c-.456237792970569-.604248046878638-1.173706054689319-1-1.9892578125-1-1.380676269529431,0-2.5,1.119262695310681-2.5,2.5v2.5","key":"3"})
  );
});

ClockUnlock.displayName = 'ClockUnlock';

export default ClockUnlock;
export { ClockUnlock };
