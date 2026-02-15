import { forwardRef } from 'react';

const SwitchToggleButton3On = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <rect x="1.999999977099833" y="5.999996563434252" width="20" height="11.999999999998181" rx="3.000000000000995" ry="3.000000000000995" transform="translate(23.999999953120756 23.999993127945594) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999976560503,17.999996563790774l-1-.000000000090949c-1.656854249489697-.000000000145519-2.999999999879947-1.343145750775875-2.99999999973079-3.00000000026921l.00000000054024-5.999999999996362c.000000000150976-1.656854249493335,1.343145750770418-2.999999999879947,3.000000000271029-2.99999999973079l1,.000000000090949" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SwitchToggleButton3On.displayName = 'SwitchToggleButton3On';

export default SwitchToggleButton3On;
export { SwitchToggleButton3On };
