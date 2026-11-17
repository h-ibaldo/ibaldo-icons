import { createElement, forwardRef } from 'react';

const CloudUploadLargeRound = forwardRef(function CloudUploadLargeRound(
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
    createElement('path', {"d":"M16.999999999992724,17.999999973497324c2.761474609369543,0,5-2.238586425788526,5-5,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371090112,5.093139648441138-2.318725585942047.434509277340112-4.075744628909888,2.462036132808862-4.075744628909888,4.906860351558862,0,2.761413574211474,2.238525390619543,5,5,5","key":"0"}),
    createElement('polyline', {"points":"8.999999999992724 13.999999973497324 11.999999978361302 10.999999973497324 14.999999999992724 13.999999973497324","key":"1"}),
    createElement('line', {"x1":"11.999999985571776","y1":"21.999999973497324","x2":"11.999999985571776","y2":"10.999999973497324","key":"2"})
  );
});

CloudUploadLargeRound.displayName = 'CloudUploadLargeRound';

export default CloudUploadLargeRound;
export { CloudUploadLargeRound };
