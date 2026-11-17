import { createElement, forwardRef } from 'react';

const Bookmark2Copy = forwardRef(function Bookmark2Copy(
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
    createElement('path', {"d":"M21,2H7c-1.656854249493335,0-3,1.343145750510303-3,3v17l7-4.000000004851245,7,4.000000004851245V4.999997000000803c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016Z","key":"0"}),
    createElement('path', {"d":"M9,9v-.000001999998858c0-1.104568388791449.895429604908713-1.999998000001142,1.999997999999323-1.999998000001142h.000004000001354c1.10456839509061,0,1.999997999999323.895429604910532,1.999997999999323,1.999998000001142v.171575703679991c0,.530432449249929-.210713470016344,1.039139766338849-.585785851841138,1.414212148160004l-3.414214148158862,3.414214148158862h4","key":"1"})
  );
});

Bookmark2Copy.displayName = 'Bookmark2Copy';

export default Bookmark2Copy;
export { Bookmark2Copy };
