import { createElement, forwardRef } from 'react';

const Cloud3Music1 = forwardRef(function Cloud3Music1(
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
    createElement('g', {"key":"0"},
      createElement('polyline', {"points":"15 13.999999973497324 12 12.999999973497324 12 19.999999973497324","key":"0"}),
      createElement('ellipse', {"cx":"10.5","cy":"19.999999973497324","rx":"1.5","ry":"1","key":"1"})),
    createElement('path', {"d":"M17,17.999999973497324c2.761474609369543,0,5-2.238586425788526,5-5,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.047790527340112,1.237548828119543,3.796447753909888,3,4.5693359375","key":"1"})
  );
});

Cloud3Music1.displayName = 'Cloud3Music1';

export default Cloud3Music1;
export { Cloud3Music1 };
