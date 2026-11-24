import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Polyline, Rect } from 'react-native-svg';

const DragImage = forwardRef(function DragImage(
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
    createElement(Path, {"d":"M1.974731450033687,4.000000000459295v-1c0-.552284749828686.447715250169495-1,1-1h1","key":"0"}),
    createElement(Path, {"d":"M3.974731449988212,17.000000000459295h-1c-.55228474984051,0-.999999999944521-.447715250184046-.999999999933607-1.000000000022737l.000000000024556-1.000000000066393","key":"1"}),
    createElement(Path, {"d":"M14.974731450033687,2.000000000459295h1c.552284749830505,0,1,.447715250171314,1,1v1","key":"2"}),
    createElement(Line, {"x1":"7.974731450033687","y1":"2.000000000459295","x2":"10.974731450033687","y2":"2.000000000459295","key":"3"}),
    createElement(Line, {"x1":"1.974731450033687","y1":"8.000000000459295","x2":"1.974731450033687","y2":"11.00000000041382","key":"4"}),
    createElement(Rect, {"x":"6.974731450033687","y":"7.000000000459295","width":"15","height":"15","rx":"2","ry":"2","key":"5"}),
    createElement(Polyline, {"points":"6.974731450033687 20.000000000459295 10.974731450033687 16.000000000459295 13.974731450033687 18.000000000462023 18.974731450033687 12.000000000459295 21.974731450033687 14.000000000459295","key":"6"}),
    createElement(Circle, {"cx":"12.474731450033687","cy":"11.500000000459295","r":".5","key":"7"})
  );
});

DragImage.displayName = 'DragImage';

export default DragImage;
export { DragImage };
