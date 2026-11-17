import { createElement, forwardRef } from 'react';

const PencilUnderlineDetailed = forwardRef(function PencilUnderlineDetailed(
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
    createElement('path', {"d":"M21.121320343560001,4.636038969289075l-1.757359312849985-1.757359312850895c-1.171572875259699-1.171572875248785-3.071067811870307-1.171572875248785-4.242640687120002,0L3,14.999999999998181l-.99999999963984,6.99999999963984,6.99999999963984-1,12.121320343529987-12.121320343199841c1.171572875279708-1.171572875248785,1.171572875289712-3.071067811881221.000000000030013-4.242640687149105Z","key":"0"}),
    createElement('line', {"x1":"14","y1":"3.999999999998181","x2":"20","y2":"9.999999999998181","key":"1"}),
    createElement('line', {"x1":"12","y1":"5.999999999998181","x2":"18","y2":"11.999999999998181","key":"2"}),
    createElement('path', {"d":"M3.9716796875,21.718261718748181c-.124877929690228-.877075195310681-.81298828125-1.565063476560681-1.68994140625-1.68994140625","key":"3"}),
    createElement('line', {"x1":"7","y1":"16.999999999998181","x2":"15","y2":"8.999999999998181","key":"4"}),
    createElement('line', {"x1":"13","y1":"21.999999999998181","x2":"18","y2":"21.999999999998181","key":"5"}),
    createElement('line', {"x1":"21.989999999999782","y1":"21.999999999998181","x2":"22","y2":"21.999999999998181","key":"6"})
  );
});

PencilUnderlineDetailed.displayName = 'PencilUnderlineDetailed';

export default PencilUnderlineDetailed;
export { PencilUnderlineDetailed };
