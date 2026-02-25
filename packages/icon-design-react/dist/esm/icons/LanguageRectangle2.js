import { forwardRef } from 'react';

const LanguageRectangle2 = forwardRef(({
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
    <rect x="1.974731438136587" y="3.997562039460718" width="20" height="16" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.974731438136587,15.997562039460718v-6.000002000000677c0-1.10456839509061-.895429604919627-1.999997999999323-1.999998000001142-1.999997999999323h-.000003999999535c-1.10456839509061,0-1.999997999999323.895429604908713-1.999997999999323,1.999997999999323v6.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.974731438136587" y1="12.997562039460718" x2="8.974731438136587" y2="12.997562039460718" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731438136587" y1="9.997562039460718" x2="18.974731438136587" y2="9.997562039460718" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.974731438136587" y1="7.997562039460718" x2="14.974731438136587" y2="9.997562039460718" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.949462883445449,9.997562039460718c0,2-2,5-5,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.070190422497035,12.997562039460718c.878051757828871,1.272705078125,2.215942382828871,2.445556640625,3.879272460948414,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LanguageRectangle2.displayName = 'LanguageRectangle2';

export default LanguageRectangle2;
export { LanguageRectangle2 };
