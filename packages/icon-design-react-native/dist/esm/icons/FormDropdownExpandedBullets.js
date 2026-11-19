import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const FormDropdownExpandedBullets = forwardRef(function FormDropdownExpandedBullets(
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
    createElement(Rect, {"x":"1.974731444101053","y":"2.99999999557258","width":"20","height":"6","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"15.974731444101053","y1":"2.999999995576218","x2":"15.974731444101053","y2":"8.99999999557258","key":"1"}),
    createElement(Path, {"d":"M1.974731444101053,8.99999999557258v11c0,.552284749828686.447715250169495,1,1,1h12c.552284749828686,0,1-.447715250171314,1-1v-11","key":"2"}),
    createElement(Line, {"x1":"5.964731444100835","y1":"12.99999999557258","x2":"5.974731444101053","y2":"12.99999999557258","key":"3"}),
    createElement(Line, {"x1":"5.964731444100835","y1":"16.99999999557258","x2":"5.974731444101053","y2":"16.99999999557258","key":"4"}),
    createElement(Line, {"x1":"11.974731444101053","y1":"12.99999999557258","x2":"8.974731444101053","y2":"12.99999999557258","key":"5"}),
    createElement(Line, {"x1":"11.974731444101053","y1":"16.99999999557258","x2":"8.974731444101053","y2":"16.99999999557258","key":"6"})
  );
});

FormDropdownExpandedBullets.displayName = 'FormDropdownExpandedBullets';

export default FormDropdownExpandedBullets;
export { FormDropdownExpandedBullets };
