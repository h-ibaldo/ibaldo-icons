import { forwardRef } from 'react';

const Cursor12 = forwardRef(({
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
    <path d="M17.619790307669973,21.970769791338171l-6.047767397809366-6.047777307650904-1.904631027829964,3.847935758671156c-.405622731879703.819481669519519-1.597671602630726.746111294889488-1.899735477190916-.116928346711575L2.059941009660179,3.346241623698006c-.285760616179687-.816458903380408.499059937070342-1.601279456630436,1.31551884045075-1.315518840448931l16.307759042989346,5.707715665048454c.863039530238893.302063835581066.936410034099026,1.494112493761349.116928566809293,1.899735368231632l-3.847926839958745,1.904627752908709,6.047767397798452,6.047777307649085-4.380197710079301,4.380190914251216Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cursor12.displayName = 'Cursor12';

export default Cursor12;
export { Cursor12 };
