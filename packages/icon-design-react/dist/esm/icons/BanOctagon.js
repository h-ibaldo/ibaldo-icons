import { createElement, forwardRef } from 'react';

const BanOctagon = forwardRef(function BanOctagon(
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
    createElement('path', {"d":"M6.828 3.172L3.172 6.828C2.422 7.578 2 8.598 2 9.656L2 14.344C2 15.402 2.422 16.422 3.172 17.172L6.828 20.828C7.578 21.578 8.598 22 9.656 22L14.344 22C15.402 22 16.422 21.578 17.172 20.828L20.828 17.172C21.578 16.422 22 15.402 22 14.344L22 9.656C22 8.598 21.578 7.578 20.828 6.828L17.172 3.172C16.422 2.422 15.402 2 14.344 2L9.656 2C8.598 2 7.578 2.422 6.828 3.172Z","key":"0"}),
    createElement('path', {"d":"M16 8L8 16","key":"1"})
  );
});

BanOctagon.displayName = 'BanOctagon';

export default BanOctagon;
export { BanOctagon };
