import { createElement, forwardRef } from 'react';

const ScreensharingRectangles1 = forwardRef(function ScreensharingRectangles1(
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
    createElement('path', {"d":"M5.974731440099276,14.000000003885361h-3c-.552284749819592,0-1-.447715250167676-1-1V4.000000003885361c0-.552284749828686.447715250180408-1,1-1h14c.552284749830505,0,1,.447715250171314,1,1v6","key":"0"}),
    createElement('rect', {"x":"5.974731440099276","y":"10.000000003885361","width":"16","height":"11","rx":"1","ry":"1","key":"1"})
  );
});

ScreensharingRectangles1.displayName = 'ScreensharingRectangles1';

export default ScreensharingRectangles1;
export { ScreensharingRectangles1 };
