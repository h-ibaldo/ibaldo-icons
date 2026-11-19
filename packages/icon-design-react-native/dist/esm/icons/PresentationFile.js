import { createElement, forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const PresentationFile = forwardRef(function PresentationFile(
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
    createElement(Path, {"d":"M19.999999998490239,5.9987828147041v14c0,1.104569499661011-.895430500339899,2-2,2H5.999999998490239c-1.104569499660101,0-2-.895430500338989-2-2V3.9987828147041c0-1.104569499661011.895430500339899-2,2-2h10l4,4h-4V1.9987828147041","key":"0"}),
    createElement(Rect, {"x":"7.999999998490239","y":"9.9987828147041","width":"8","height":"6","rx":"1","ry":"1","key":"1"})
  );
});

PresentationFile.displayName = 'PresentationFile';

export default PresentationFile;
export { PresentationFile };
