import { createElement, forwardRef } from 'react';

const DiagramTreeRight = forwardRef(function DiagramTreeRight(
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
    createElement('rect', {"x":"1.949462885142566","y":"10.000000000480213","width":"6","height":"4","key":"0"}),
    createElement('rect', {"x":"15.949462885142566","y":"4.000000000480213","width":"6","height":"4","key":"1"}),
    createElement('rect', {"x":"15.949462885142566","y":"16.000000000480213","width":"6","height":"4","key":"2"}),
    createElement('line', {"x1":"10.949462885142566","y1":"12.000000000480213","x2":"7.949462885142566","y2":"12.000000000480213","key":"3"}),
    createElement('path', {"d":"M15.949462885142566,6.000000000480213h-2.279240779942484c-.430430408074244,0-.812569251680543.27543009486908-.948683298051037.683772233980562l-1.772075922006479,5.316227766019438","key":"4"}),
    createElement('path', {"d":"M15.949462885142566,18.000000000480213h-2.279240779942484c-.430430408074244,0-.812569251680543-.27543009486908-.948683298051037-.683772233980562l-1.772075922006479-5.316227766019438","key":"5"})
  );
});

DiagramTreeRight.displayName = 'DiagramTreeRight';

export default DiagramTreeRight;
export { DiagramTreeRight };
