import { createElement, forwardRef } from 'react';

const PageViewGroupItems1 = forwardRef(function PageViewGroupItems1(
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
    createElement('path', {"d":"M11.999999994000973,18.998779299956368h-3c-1.104569499661011,0-2-.895430500338989-2-2v-8c0-1.104569499661011.895430500338989-2,2-2h8c1.104569499668287,0,2,.895430500338989,2,2v3","key":"0"}),
    createElement('g', {"key":"1"},
      createElement('line', {"x1":"18.999999994000973","y1":"15.998779299956368","x2":"18.999999994000973","y2":"21.998779299956368","key":"0"}),
      createElement('line', {"x1":"21.999999994000973","y1":"18.998779299865419","x2":"15.999999994000973","y2":"18.99877930004368","key":"1"})),
    createElement('path', {"d":"M6.999999994000973,13.998779299956368h-3c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h8c1.104569499668287,0,2,.895430500338989,2,2v3","key":"2"})
  );
});

PageViewGroupItems1.displayName = 'PageViewGroupItems1';

export default PageViewGroupItems1;
export { PageViewGroupItems1 };
