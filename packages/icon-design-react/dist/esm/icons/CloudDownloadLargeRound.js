import { createElement, forwardRef } from 'react';

const CloudDownloadLargeRound = forwardRef(function CloudDownloadLargeRound(
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
    createElement('polyline', {"points":"9.000000000001819 18.999999999998181 11.999999978361302 21.999999999998181 15.000000000001819 18.999999999998181","key":"0"}),
    createElement('line', {"x1":"11.99999998558269","y1":"10.999999999998181","x2":"11.99999998558269","y2":"21.999999999998181","key":"1"}),
    createElement('path', {"d":"M17.000000000001819,15.999999999998181h.5c2.4853515625,0,4.5-2.014709472659888,4.5-4.5,0-2.342651367200233-1.796630859380457-4.244812011720569-4.08349609375-4.4580078125-.459716796880457-2.857177734380457-2.9296875-5.0419921875-5.91650390625-5.0419921875s-5.456787109380457,2.184814453119543-5.91650390625,5.0419921875c-2.286865234380457.213195800779431-4.08349609375,2.115356445299767-4.08349609375,4.4580078125,0,2.485290527340112,2.0146484375,4.5,4.5,4.5h.5","key":"2"})
  );
});

CloudDownloadLargeRound.displayName = 'CloudDownloadLargeRound';

export default CloudDownloadLargeRound;
export { CloudDownloadLargeRound };
