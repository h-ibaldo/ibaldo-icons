import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const Document = forwardRef(function Document(
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
    createElement(Line, {"x1":"16.999999994219252","y1":"9.998779300538445","x2":"6.999999994219252","y2":"9.998779300090973","key":"0"}),
    createElement(Line, {"x1":"16.999999994399332","y1":"13.998779299956368","x2":"6.999999994399332","y2":"13.998779299505259","key":"1"}),
    createElement(Line, {"x1":"16.999999994399332","y1":"17.998779300403839","x2":"6.999999994399332","y2":"17.998779299956368","key":"2"}),
    createElement(Line, {"x1":"16.999999994410246","y1":"5.998779300538445","x2":"6.999999994410246","y2":"5.998779300090973","key":"3"}),
    createElement(Rect, {"x":"2.999999994394784","y":"1.998779300314709","width":"18","height":"19.999999999236024","rx":".999999999997829","ry":".999999999997829","key":"4"})
  );
});

Document.displayName = 'Document';

export default Document;
export { Document };
