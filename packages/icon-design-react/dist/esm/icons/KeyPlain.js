import { createElement, forwardRef } from 'react';

const KeyPlain = forwardRef(function KeyPlain(
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
    createElement('path', {"d":"M16.000019575950319,2.000015258789062c-3.313720703130457,0-6,2.686279296869543-6,6,0,.605834960939319.091796875,1.18994140625.2587890625,1.741271972648974L2.000019575950319,18.000015258789062v4h4v-3h3v-3h3v-2.666687011720569l.53173828125-.443054199220569c.979736328119543.6962890625,2.174560546869543,1.109741210941138,3.46826171875,1.109741210941138,3.313720703119543,0,6-2.686279296880457,6-6,0-3.313720703130457-2.686279296880457-6-6-6Z","key":"0"})
  );
});

KeyPlain.displayName = 'KeyPlain';

export default KeyPlain;
export { KeyPlain };
