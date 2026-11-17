import { createElement, forwardRef } from 'react';

const SwitchKnobButton = forwardRef(function SwitchKnobButton(
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
    createElement('circle', {"cx":"11.99999997708619","cy":"11.997562035419833","r":"10","key":"0"}),
    createElement('line', {"x1":"4.928932165386868","y1":"4.92649422339673","x2":"9.171572852405006","y2":"9.169134910611319","key":"1"})
  );
});

SwitchKnobButton.displayName = 'SwitchKnobButton';

export default SwitchKnobButton;
export { SwitchKnobButton };
