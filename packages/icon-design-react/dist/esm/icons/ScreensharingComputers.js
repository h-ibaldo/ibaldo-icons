import { createElement, forwardRef } from 'react';

const ScreensharingComputers = forwardRef(function ScreensharingComputers(
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
    createElement('path', {"d":"M17.974731440099276,11.000000003885361h3c.552284749830505,0,1,.447715250171314,1,1v6c0,.552284749832324-.447715250169495,1-1,1h-11c-.552284749819592,0-1-.447715250167676-1-1v-2","key":"0"}),
    createElement('line', {"x1":"12.974731440099276","y1":"22.000000003885361","x2":"17.974731440099276","y2":"22.000000003885361","key":"1"}),
    createElement('rect', {"x":"1.974731440099276","y":"2.000000003885361","width":"13","height":"8","rx":"1","ry":"1","key":"2"}),
    createElement('line', {"x1":"5.974731440099276","y1":"13.000000003885361","x2":"10.974731440099276","y2":"13.000000003885361","key":"3"})
  );
});

ScreensharingComputers.displayName = 'ScreensharingComputers';

export default ScreensharingComputers;
export { ScreensharingComputers };
