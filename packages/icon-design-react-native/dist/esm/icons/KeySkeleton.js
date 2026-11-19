import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const KeySkeleton = forwardRef(function KeySkeleton(
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
    createElement(Line, {"x1":"2.000019575949409","y1":"8.000015258789062","x2":"5.000019575949409","y2":"5.000015258789062","key":"0"}),
    createElement(Line, {"x1":"5.000019575949409","y1":"11.000015258789062","x2":"8.000019575949409","y2":"8.000015258789062","key":"1"}),
    createElement(Path, {"d":"M13.000019575949409,15.964491283668394l2.964476024890246-2.928952049771397c1.380698633480279-1.38069863347846,3.619253416280117-1.38069863347846,4.999952049771309,0l.000047950228691.00004795023051c1.380698633480279,1.380698633489374,1.380698633480279,3.619253416291031,0,4.99995204976949l-2.964476024890246,2.928952049771397c-1.380698633489374,1.380698633489374-3.619253416280117,1.380698633489374-4.99995204976949,0l-.00004795023051-.00004795023051c-1.380698633489374-1.380698633480279-1.380698633489374-3.619253416280117,0-4.99995204976949Z","key":"2"}),
    createElement(Line, {"x1":"14.491230513449409","y1":"14.491165161129175","x2":"3.000019575949409","y2":"3.000015258789062","key":"3"})
  );
});

KeySkeleton.displayName = 'KeySkeleton';

export default KeySkeleton;
export { KeySkeleton };
