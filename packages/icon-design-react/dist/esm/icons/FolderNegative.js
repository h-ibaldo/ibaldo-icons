import { forwardRef } from 'react';

const FolderNegative = forwardRef(({
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
    <path d="M10.999999978690539,20.999999999998181H3.99999997176019c-1.104569499660101,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500339899-2,2-2h3.92963058965961c.668705935499929,0,1.293168239900297.334201833509724,1.664099899290704.890598573469106l.812536329349314,1.218802853061788c.370931659390408.556396739959382.995393963789866.890598573469106,1.664099899289795.890598573469106h7.929633174780065c1.104569486550645,0,1.999999981459951.895430479880815,2,1.999999966430551l.000000100700163,6.000000033569449" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.999999978690539" y1="18.999999999998181" x2="21.999999978690539" y2="18.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FolderNegative.displayName = 'FolderNegative';

export default FolderNegative;
export { FolderNegative };
