import { forwardRef } from 'react';

const KeyPassword11 = forwardRef(({
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
    <line x1="16" y1="6.999999999998181" x2="17" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.135986328119543,3.86395263671875c-2.485229492179315-2.485290527351026-6.5146484375-2.485290527351026-9,0l-2.428955078119543,2.428955078119543c-.390380859380457.390502929689319-.390380859380457,1.023681640630457,0,1.414184570319776l1.79296875,1.792907714840112L2,17.999999999998181v4h4v-3h3v-3h3v-2l1.5-1.5,2.79296875,2.792907714840112c.390380859369543.390502929689319,1.023681640619543.390502929689319,1.4140625,0l2.428955078119543-2.428955078119543c2.4853515625-2.485290527351026,2.4853515625-6.514709472659888,0-9Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

KeyPassword11.displayName = 'KeyPassword11';

export default KeyPassword11;
export { KeyPassword11 };
