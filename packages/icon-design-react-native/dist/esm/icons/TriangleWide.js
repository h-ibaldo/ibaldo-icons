import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TriangleWide = forwardRef(function TriangleWide(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M5.984525027919517,21.000000000479304h11.980412844241073c3.097200032168985,0,5.019342554738614-3.368455577625355,3.443706112859218-6.034917248503916l-5.990206422120536-10.137272406660486c-1.548247016329697-2.62011033532508-5.339165209388739-2.62011033532508-6.887412225720254,0L2.540818915069394,14.965082751975388c-1.575636441888491,2.666461670878562.346506080690233,6.034917248503916,3.443706112850123,6.034917248503916Z","key":"0"})
  );
});

TriangleWide.displayName = 'TriangleWide';

export default TriangleWide;
export { TriangleWide };
