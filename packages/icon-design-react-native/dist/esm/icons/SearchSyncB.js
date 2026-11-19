import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const SearchSyncB = forwardRef(function SearchSyncB(
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
    createElement(Polyline, {"points":"14.000000005000402 6.000000003886271 14.000000005000402 3.000000003886271 17.000000005000402 3.000000003886271","key":"0"}),
    createElement(Line, {"x1":"15.656860356559264","y1":"15.65686035545059","x2":"22.000000005000402","y2":"22.000000003886271","key":"1"}),
    createElement(Path, {"d":"M18.000000005000402,10.000000003886271c0-2.959411621092841-1.611083984369543-5.537170410155341-4-6.921020507810681","key":"2"}),
    createElement(Path, {"d":"M10.000000005000402,2.000000003886271C5.581726079220971,2.000000003886271,2.000000005000402,5.58172607810593,2.000000005000402,10.000000003886271","key":"3"}),
    createElement(Polyline, {"points":"6.000000005000402 14.00000000352793 6.000000004729372 17.00000000352793 3.000000004729372 17.000000003256901","key":"4"}),
    createElement(Path, {"d":"M2.000000005360562,10.000000003169589c-.000000000271029,2.959411621092841,1.611083983878416,5.53717041030086,3.99999999938882,6.921020508169931","key":"5"}),
    createElement(Path, {"d":"M10.000000004640242,18.000000003886271c4.418273925779431.00000000039654,8.000000000320142-3.58172607349934,8.00000000072032-7.99999999927968","key":"6"})
  );
});

SearchSyncB.displayName = 'SearchSyncB';

export default SearchSyncB;
export { SearchSyncB };
