import { createElement, forwardRef } from 'react';

const TouchScreenMoveLeft = forwardRef(function TouchScreenMoveLeft(
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
    createElement('polyline', {"points":"5.025268549024986 14.99878273928698 2.025268549155953 11.998782739152375 5.02526854928692 8.99878273928698","key":"0"}),
    createElement('line', {"x1":"14.025268549155953","y1":"11.998782739690796","x2":"2.025268549155953","y2":"11.998782739152375","key":"1"}),
    createElement('path', {"d":"M10.83453368600567,8.998782739548915c1.037841796949579-1.791625976515206,2.971191406390062-2.999999999865395,5.190734863419493-2.999999999767169,3.313720703120453.000000000149157,5.999999999879947,2.68627929714421,5.99999999973079,6.00000000026921s-2.686279297140572,5.999999999879947-6.00000000026921,5.99999999973079c-2.21954345703125-.000000000098225-4.15289306635168-1.208374023623037-5.190734863150283-3.000000000232831","key":"2"})
  );
});

TouchScreenMoveLeft.displayName = 'TouchScreenMoveLeft';

export default TouchScreenMoveLeft;
export { TouchScreenMoveLeft };
