import { forwardRef } from 'react';

const LupeZoom1ActualSizeOneToOne2 = forwardRef(({
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
    <circle cx="10.974731417511066" cy="10.998779298535737" r="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.33868405422254" y1="17.362731935254487" x2="21.974731417511066" y2="21.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.974731417511066 8.998779298535737 6.974731417511066 8.998779298535737 6.974731417511066 12.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.974731417511066 8.998779298535737 14.974731417511066 8.998779298535737 14.974731417511066 12.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731417511066" y1="9.008779298535956" x2="10.974731417511066" y2="8.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731417511066" y1="13.008779298535956" x2="10.974731417511066" y2="12.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeZoom1ActualSizeOneToOne2.displayName = 'LupeZoom1ActualSizeOneToOne2';

export default LupeZoom1ActualSizeOneToOne2;
export { LupeZoom1ActualSizeOneToOne2 };
