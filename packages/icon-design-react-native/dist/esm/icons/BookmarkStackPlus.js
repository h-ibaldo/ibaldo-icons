import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkStackPlus = forwardRef(function BookmarkStackPlus(
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
    createElement(Path, {"d":"M14.000000026699126,5.999999999998181H4.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-4,6,4V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"0"}),
    createElement(Path, {"d":"M15.000000026699126,13.999999999998181l6,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1h-10c-.552284749828686,0-1,.447715250169495-1,1v3","key":"1"}),
    createElement(Line, {"x1":"6.509665274770668","y1":"11.948015268357267","x2":"11.509665274770668","y2":"11.948015268357267","key":"2"}),
    createElement(Line, {"x1":"9.009665274770668","y1":"9.448015268357267","x2":"9.009665274770668","y2":"14.448015268357267","key":"3"})
  );
});

BookmarkStackPlus.displayName = 'BookmarkStackPlus';

export default BookmarkStackPlus;
export { BookmarkStackPlus };
