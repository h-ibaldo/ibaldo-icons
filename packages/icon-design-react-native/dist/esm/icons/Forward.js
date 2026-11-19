import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Forward = forwardRef(function Forward(
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
    createElement(Path, {"d":"M22,8.999999999998181L14,1.999999999998181v4.159057617190228c-6.781982421880457.972778320309772-12,6.789916992179315-12,13.840942382809772v2l1.921752929690228-3.202880859380457c2.195678710929315-3.659423828119543,5.918579101559772-6.08349609375,10.078247070309772-6.6611328125v3.864013671880457l8-7Z","key":"0"})
  );
});

Forward.displayName = 'Forward';

export default Forward;
export { Forward };
