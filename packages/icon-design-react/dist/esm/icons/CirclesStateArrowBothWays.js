import { createElement, forwardRef } from 'react';

const CirclesStateArrowBothWays = forwardRef(function CirclesStateArrowBothWays(
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
    createElement('polyline', {"points":"17.000000322590495 9.998779646379262 17.000000322859705 6.9987796463829 14.000000322859705 6.99877964611369","key":"0"}),
    createElement('polyline', {"points":"6.999999977209882 12.998782071237656 6.999999976489562 16.998779299960006 10.999997205221007 16.998779300676688","key":"1"}),
    createElement('line', {"x1":"7.999999976489562","y1":"15.998779299956368","x2":"16.999999976489562","y2":"6.998779299956368","key":"2"}),
    createElement('path', {"d":"M10.999999976489562,8.305175784331368c-.634521484369543-.1920166015625-1.302490234369543-.306396484375-2-.306396484375-3.865966796869543,0-7,3.134033203125-7,7s3.134033203130457,7,7,7c3.865966796880457,0,7-3.134033203125,7-7,0-.697509765625-.114379882810681-1.365478515625-.306396484369543-2","key":"3"}),
    createElement('path', {"d":"M15.931030249928881,15.929809573393868c3.42462158203125-.456298828125,6.068969726560681-3.38153076171875,6.068969726560681-6.9310302734375,0-3.865966796875-3.134033203119543-7-7-7-3.549499511709655,0-6.474731445310681,2.64434814453125-6.931030273430224,6.0689697265625","key":"4"})
  );
});

CirclesStateArrowBothWays.displayName = 'CirclesStateArrowBothWays';

export default CirclesStateArrowBothWays;
export { CirclesStateArrowBothWays };
