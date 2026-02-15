import { forwardRef } from 'react';

const Door3EnterLogin2 = forwardRef(({
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
    <path d="M3.974731450043691,18.000000000481123V3.000000000479304c0-.552284749830505.447715250171314-1,1-1h14c.552284749833234,0,1,.447715250169495,1,1v14.000000000001819c0,.552284749828686-.447715250166766,1-1,1h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.974731450043691,18.000000000481123l8.296930766973674,3.68752478532133c.330643698467611.146952754875201.703069233026326-.095076577726104.703069233026326-.456905774311053V6.324936545025594c0-.197594358243805-.116366760468736-.376655104755628-.296930766972764-.456905774311053L4.41308594223392,2.194824219231123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Door3EnterLogin2.displayName = 'Door3EnterLogin2';

export default Door3EnterLogin2;
export { Door3EnterLogin2 };
