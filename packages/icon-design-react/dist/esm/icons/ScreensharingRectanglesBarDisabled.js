import { createElement, forwardRef } from 'react';

const ScreensharingRectanglesBarDisabled = forwardRef(function ScreensharingRectanglesBarDisabled(
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
    createElement('line', {"x1":"2.974731440099276","y1":"20.000000003885361","x2":"20.974731440099276","y2":"4.000000003885361","key":"0"}),
    createElement('path', {"d":"M6.974731440099276,16.444458011697861v3.5555419921875c0,.55224609375.447692871090112,1,1,1h13c.552307128909888,0,1-.44775390625,1-1v-9c0-.55230712890625-.447692871090112-1-1-1h-6.75","key":"1"}),
    createElement('path', {"d":"M15.974731440599498,3.000000004467438l-13-.000000001167791c-.552307128909888-.000000000047294-1.000000000040018.447753906162689-1.000000000100044.999999999912689l-.000000000800355,9c-.000000000049113.55230712890625.447692871000982,1.000000000040018.99999999991087,1.000000000087311l1.000000000489308.000000000705768","key":"2"})
  );
});

ScreensharingRectanglesBarDisabled.displayName = 'ScreensharingRectanglesBarDisabled';

export default ScreensharingRectanglesBarDisabled;
export { ScreensharingRectanglesBarDisabled };
