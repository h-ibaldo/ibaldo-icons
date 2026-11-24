import { createElement, forwardRef } from 'react';

const TabCheckCenterSharp = forwardRef(function TabCheckCenterSharp(
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
    createElement('polygon', {"points":"22.025268532079281 21.998779305074095 2.025268532079281 21.998779305074095 2.025268532079281 1.998779305074095 10.025268532079281 1.998779305074095 13.025268532079281 5.998779305074095 22.025268532079281 5.998779305074095 22.025268532079281 21.998779305074095","key":"0"}),
    createElement('polyline', {"points":"15.025268532079281 1.998779305074095 22.025268532079281 1.998779305074095 22.025268532079281 5.998779305074095","key":"1"}),
    createElement('polyline', {"points":"8.025268532079281 13.99877930112325 11.025268532079281 16.99877930112325 16.025268532079281 11.99877930112325","key":"2"})
  );
});

TabCheckCenterSharp.displayName = 'TabCheckCenterSharp';

export default TabCheckCenterSharp;
export { TabCheckCenterSharp };
