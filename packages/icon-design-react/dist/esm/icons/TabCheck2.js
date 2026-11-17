import { createElement, forwardRef } from 'react';

const TabCheck2 = forwardRef(function TabCheck2(
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
    createElement('g', {"key":"0"},
      createElement('circle', {"cx":"17.025268532090195","cy":"16.99877930112325","r":"5","key":"0"}),
      createElement('polyline', {"points":"15.525268532090195 16.998779298696718 16.525268532090195 17.998779303549782 18.525268532090195 15.998779298696718","key":"1"})),
    createElement('polyline', {"points":"10.025268532090195 21.99877930112325 2.025268532090195 21.99877930112325 2.025268532090195 1.99877930112325 11.025268532090195 1.99877930112325 11.025268532090195 5.99877930112325 22.025268532090195 5.99877930112325 22.025268532090195 9.99877930112325","key":"1"}),
    createElement('line', {"x1":"22.025268532090195","y1":"1.99877930112325","x2":"15.025268532090195","y2":"1.99877930112325","key":"2"})
  );
});

TabCheck2.displayName = 'TabCheck2';

export default TabCheck2;
export { TabCheck2 };
