import { createElement, forwardRef } from 'react';

const TabXCircleSharp = forwardRef(function TabXCircleSharp(
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
    createElement('polyline', {"points":"9.025268532090195 21.99877930112325 2.025268532090195 21.99877930112325 2.025268532090195 1.99877930112325 10.025268532090195 1.99877930112325 13.025268532090195 5.99877930112325 22.025268532090195 5.99877930112325 22.025268532090195 8.99877930112325","key":"0"}),
    createElement('polyline', {"points":"15.025268532090195 1.99877930112325 22.025268532090195 1.99877930112325 22.025268532090195 5.99877930112325","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('circle', {"cx":"16.525268529728237","cy":"16.498779303550691","r":"5.499999997577106","key":"0"}),
      createElement('line', {"x1":"18.025268532150221","y1":"14.99877930112325","x2":"15.025268532150221","y2":"17.99877930112325","key":"1"}),
      createElement('line', {"x1":"15.025268532219343","y1":"14.998779301057766","x2":"18.025268532090195","y2":"17.998779301192371","key":"2"}))
  );
});

TabXCircleSharp.displayName = 'TabXCircleSharp';

export default TabXCircleSharp;
export { TabXCircleSharp };
