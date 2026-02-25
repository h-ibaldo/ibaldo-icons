import { forwardRef } from 'react';

const Binoculars42 = forwardRef(({
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
    <polyline points="5.999988017680153 5.936828613277612 5.999988017680153 1.936828613277612 9.999988017680153 1.936828613277612 9.999988017680153 5.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.999988017680153 5.936828613277612 13.999988017680153 1.936828613277612 17.999988017680153 1.936828613277612 17.999988017680153 5.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999988017680153" y1="17.936828613277612" x2="9.999988017680153" y2="17.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999988017680153" y1="17.936828613277612" x2="21.999988017680153" y2="17.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.999988017680153,10.936828613277612v-3c0-1.104569499659192-.895430500340808-2-2-2h-4v3h-4v-3h-4c-1.104569499661011,0-2,.895430500340808-2,2v3c-1.1044921875,0-2,.895446777340112-2,2v8c0,.552284749830505.447715250169495,1,1,1h6c.552284749830505,0,1-.447715250169495,1-1v-7h4v7c0,.552284749830505.447715250169495,1,1,1h6c.552284749830505,0,1-.447715250169495,1-1v-8c0-1.104553222659888-.895385742180224-2-2-2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Binoculars42.displayName = 'Binoculars42';

export default Binoculars42;
export { Binoculars42 };
