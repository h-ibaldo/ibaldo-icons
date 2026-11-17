import { createElement, forwardRef } from 'react';

const Cloud3Sync = forwardRef(function Cloud3Sync(
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
    createElement('polyline', {"points":"9.000000026702764 18.999999999998181 12.000000005062248 21.999999999998181 15.000000026702764 18.999999999998181","key":"0"}),
    createElement('line', {"x1":"12.000000012270903","y1":"9.999999999998181","x2":"12.000000012270903","y2":"21.999999999998181","key":"1"}),
    createElement('path', {"d":"M17.000000026702764,15.999999999998181h.5c2.4853515625,0,4.5-2.014709472659888,4.5-4.5,0-2.342651367200233-1.796630859380457-4.244812011720569-4.08349609375-4.4580078125-.459716796880457-2.857177734380457-2.9296875-5.0419921875-5.91650390625-5.0419921875s-5.456787109380457,2.184814453119543-5.91650390625,5.0419921875c-2.286865234380457.213195800779431-4.08349609375,2.115356445299767-4.08349609375,4.4580078125,0,2.485290527340112,2.0146484375,4.5,4.5,4.5h.5","key":"2"}),
    createElement('polyline', {"points":"9.000000000001819 12.999999999998181 11.999999978361302 9.999999999998181 15.000000000001819 12.999999999998181","key":"3"})
  );
});

Cloud3Sync.displayName = 'Cloud3Sync';

export default Cloud3Sync;
export { Cloud3Sync };
