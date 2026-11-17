import { forwardRef } from 'react';

const TouchScreenTwoFingersDouble = forwardRef(({
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
    <circle cx="6.974731413245536" cy="15.998779298537556" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.974731413245536,8.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.974731413245536" cy="15.998779298537556" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.974731413245536,8.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.974731413245536,3.636840821975056c-1.261108398439319-.40875244140625-2.602661132808862-.6380615234375-4-.6380615234375-1.772338867189319,0-3.46044921875.35736083984375-5,.99957275390625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.974731413245536,3.998352052443806c-1.53955078125-.6422119140625-3.227661132808862-.99957275390625-5-.99957275390625-1.397338867189319,0-2.738891601558862.22930908203125-4,.6380615234375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenTwoFingersDouble.displayName = 'TouchScreenTwoFingersDouble';

export default TouchScreenTwoFingersDouble;
export { TouchScreenTwoFingersDouble };
