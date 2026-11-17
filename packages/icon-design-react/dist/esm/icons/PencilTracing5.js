import { createElement, forwardRef } from 'react';

const PencilTracing5 = forwardRef(function PencilTracing5(
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
    createElement('path', {"d":"M21.121320343560001,4.636038969289075l-1.757359312849985-1.757359312850895c-1.171572875259699-1.171572875248785-3.071067811870307-1.171572875248785-4.242640687120002,0L2,15.999999999998181l.00000000036016,5.99999999963984h5.99999999963984l13.121320343529987-13.121320343199841c1.171572875279708-1.171572875248785,1.171572875289712-3.071067811881221.000000000030013-4.242640687149105Z","key":"0"}),
    createElement('line', {"x1":"13","y1":"4.999999999998181","x2":"19","y2":"10.999999999998181","key":"1"}),
    createElement('line', {"x1":"13","y1":"21.999999999998181","x2":"22","y2":"21.999999999998181","key":"2"})
  );
});

PencilTracing5.displayName = 'PencilTracing5';

export default PencilTracing5;
export { PencilTracing5 };
