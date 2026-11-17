import { createElement, forwardRef } from 'react';

const FunnelFilterCoin2 = forwardRef(function FunnelFilterCoin2(
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
    createElement('polyline', {"points":"11.999999998490239 8.9987828147041 11.999999998490239 4.9987828147041 10.999999998490239 4.9987828147041","key":"0"}),
    createElement('path', {"d":"M1.999999998490239,10.9987828147041v.909830056250939c0,1.893860292271711,1.07001188114009,3.625175884320925,2.76393202249983,4.472135954998521l7.23606797750017,3.61803398875054,7.23606797749926-3.61803398875054c1.69392014136065-.846960070677596,2.76393202250074-2.578275662730448,2.76393202250074-4.472135954998521v-.909830056250939","key":"1"}),
    createElement('line', {"x1":"11.999999998490239","y1":"21.9987828147041","x2":"11.999999998490239","y2":"19.9987828147041","key":"2"}),
    createElement('circle', {"cx":"11.999999998490239","cy":"6.9987828147041","r":"5","key":"3"}),
    createElement('path', {"d":"M7.053100584429558,7.5253941428291c-3.015747070309772.68878173828125-5.053100585939319,1.98480224609375-5.053100585939319,3.473388671875,0,2.2091064453125,4.477172851559772,4,10,4,5.522827148439319,0,10-1.7908935546875,10-4,0-1.48858642578125-2.037353515620453-2.78460693359375-5.053100585940228-3.473388671875","key":"4"})
  );
});

FunnelFilterCoin2.displayName = 'FunnelFilterCoin2';

export default FunnelFilterCoin2;
export { FunnelFilterCoin2 };
