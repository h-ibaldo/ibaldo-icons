import { createElement, forwardRef } from 'react';

const GeometricFormsInconsistency = forwardRef(function GeometricFormsInconsistency(
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
    createElement('rect', {"x":"1.974731445219732","y":"2.000000000448381","width":"6","height":"20","key":"0"}),
    createElement('rect', {"x":"12.974731445219732","y":"6.000000000448381","width":"9","height":"12","key":"1"})
  );
});

GeometricFormsInconsistency.displayName = 'GeometricFormsInconsistency';

export default GeometricFormsInconsistency;
export { GeometricFormsInconsistency };
