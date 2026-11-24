import { createElement, forwardRef } from 'react';

const TabPlusCenterStep = forwardRef(function TabPlusCenterStep(
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
    createElement('polygon', {"points":"22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 11.025268532079281 1.99877930112325 11.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325","key":"0"}),
    createElement('line', {"x1":"22.025268532079281","y1":"1.99877930112325","x2":"15.025268532079281","y2":"1.99877930112325","key":"1"}),
    createElement('line', {"x1":"12.025268532079281","y1":"10.99877930112325","x2":"12.025268532079281","y2":"17.99877930112325","key":"2"}),
    createElement('line', {"x1":"15.525268532079281","y1":"14.49877930112325","x2":"8.525268532079281","y2":"14.49877930112325","key":"3"})
  );
});

TabPlusCenterStep.displayName = 'TabPlusCenterStep';

export default TabPlusCenterStep;
export { TabPlusCenterStep };
