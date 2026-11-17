import { createElement, forwardRef } from 'react';

const Door1X = forwardRef(function Door1X(
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
    createElement('polygon', {"points":"21.974731450043691 19.000000000481123 11.974731450043691 22.000000000481123 11.974731450043691 2.000000000481123 21.974731450043691 5.000000000481123 21.974731450043691 19.000000000481123","key":"0"}),
    createElement('polyline', {"points":"5.974731450043691 6.000000000481123 5.974731450043691 4.000000000481123 8.974731450043691 4.000000000481123","key":"1"}),
    createElement('polyline', {"points":"8.974731450043691 20.000000000481123 5.974731450043691 20.000000000481123 5.974731450043691 18.000000000481123","key":"2"}),
    createElement('line', {"x1":"1.974731450043691","y1":"14.000000000479304","x2":"5.974731450043691","y2":"10.000000000479304","key":"3"}),
    createElement('line', {"x1":"5.974731450043691","y1":"14.000000000479304","x2":"1.974731450043691","y2":"10.000000000479304","key":"4"})
  );
});

Door1X.displayName = 'Door1X';

export default Door1X;
export { Door1X };
