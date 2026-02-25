import { forwardRef } from 'react';

const LupeZoom1ToExtend2 = forwardRef(({
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
  <line x1="6.974731417511066" y1="6.998779298535737" x2="14.974731417511066" y2="14.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.974731417332805" y1="14.998779298357476" x2="14.974731417692965" y2="6.998779298717636" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.974731417511066 8.998779298535737 6.974731417511066 6.998779298535737 8.974731417511066 6.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.974731417421935 6.998779298626687 14.974731417421935 6.998779298535737 14.974731417511066 8.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.974731417511066 12.998779298535737 14.974731417511066 14.998779298535737 12.974731417511066 14.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731417602015 14.998779298448426 6.974731417602015 14.998779298535737 6.974731417511066 12.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeZoom1ToExtend2.displayName = 'LupeZoom1ToExtend2';

export default LupeZoom1ToExtend2;
export { LupeZoom1ToExtend2 };
