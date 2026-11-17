import { createElement, forwardRef } from 'react';

const Bell4Z = forwardRef(function Bell4Z(
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
    createElement('path', {"d":"M13.974731449503452,17.000000000480213v2.000002000000677c0,1.104568395086972-.895429604908713,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000001354c-1.10456839509061,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-2.000002000000677","key":"0"}),
    createElement('line', {"x1":"19.974731449503452","y1":"17.000000000480213","x2":"3.974731449503452","y2":"17.000000000480213","key":"1"}),
    createElement('path', {"d":"M17.974731449503452,17.000000000480213v-7.000006000002031c0-3.313705185279105-2.686288814724321-5.999993999997969-5.999993999999788-5.999993999997969h-.000012000000424c-3.313705185275467,0-5.999993999999788,2.686288814718864-5.999993999999788,5.999993999997969v7.000006000002031","key":"2"}),
    createElement('line', {"x1":"11.974731449503452","y1":"2.000000000480213","x2":"11.974731449503452","y2":"4.000000000480213","key":"3"}),
    createElement('polyline', {"points":"9.974731449503452 9.000000000480213 13.974731449503452 9.000000000480213 9.974731449503452 13.000000000480213 13.974731449503452 13.000000000480213","key":"4"})
  );
});

Bell4Z.displayName = 'Bell4Z';

export default Bell4Z;
export { Bell4Z };
