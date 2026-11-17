import { createElement, forwardRef } from 'react';

const KeyPassword12 = forwardRef(function KeyPassword12(
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
    createElement('path', {"d":"M15.51374654996016,3.765121204949537l4.746262782439771,5.220889060678019c1.493782768839992,1.643161045729357,1.316767615950084,4.200008944080764-.389196591850123,5.621645783910935l-.000006000000212.000004999999874c-1.605116853689651,1.337597378080318-3.979074859569664,1.173244019539197-5.384553290509757-.37278225449154l-4.746262782439771-5.220889060688933c-1.493782768839992-1.643161045718443-1.316767615950084-4.20000894406985.389196591850123-5.621645783900021l.000006000000212-.000004999999874c1.605116853689651-1.337597378080318,3.979074859569664-1.173244019539197,5.384553290509757.37278225449154Z","key":"0"}),
    createElement('line', {"x1":"12.238037109369543","y1":"11.76190185546875","x2":"3","y2":"20.999999999998181","key":"1"}),
    createElement('line', {"x1":"8","y1":"21.999999999998181","x2":"5","y2":"18.999999999998181","key":"2"}),
    createElement('line', {"x1":"11","y1":"18.999999999998181","x2":"8","y2":"15.999999999998181","key":"3"})
  );
});

KeyPassword12.displayName = 'KeyPassword12';

export default KeyPassword12;
export { KeyPassword12 };
