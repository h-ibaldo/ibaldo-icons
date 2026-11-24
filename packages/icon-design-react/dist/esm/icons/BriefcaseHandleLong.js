import { createElement, forwardRef } from 'react';

const BriefcaseHandleLong = forwardRef(function BriefcaseHandleLong(
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
    createElement('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M8,8.999999999998181V3.999999999998181c0-.552284749830505.447715250169495-1,1-1h6c.552284749830505,0,1,.447715250169495,1,1v5","key":"1"})
  );
});

BriefcaseHandleLong.displayName = 'BriefcaseHandleLong';

export default BriefcaseHandleLong;
export { BriefcaseHandleLong };
