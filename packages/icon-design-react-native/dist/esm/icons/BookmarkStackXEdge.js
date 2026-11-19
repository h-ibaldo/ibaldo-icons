import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkStackXEdge = forwardRef(function BookmarkStackXEdge(
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
    createElement(Path, {"d":"M15.000000026699126,5.999999999998181H5.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-4,6,4V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"0"}),
    createElement(Path, {"d":"M20.000000026699126,17.999999999998181V4.999999999998181c0-1.656854249490607-1.343145750508484-3-3-3h-9","key":"1"}),
    createElement(Line, {"x1":"8.000000026699126","y1":"14.551984731639095","x2":"12.000000026699126","y2":"10.551984731639095","key":"2"}),
    createElement(Line, {"x1":"12.000000026790076","y1":"14.551984731548146","x2":"8.000000026600901","y2":"10.551984731728226","key":"3"})
  );
});

BookmarkStackXEdge.displayName = 'BookmarkStackXEdge';

export default BookmarkStackXEdge;
export { BookmarkStackXEdge };
