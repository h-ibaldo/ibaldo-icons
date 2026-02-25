import { forwardRef } from 'react';

const NewspaperNews52 = forwardRef(({
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
    <rect x="5.999987951774528" y="5.936828613277612" width="4.000000065971108" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999988017745636" y1="5.936828613277612" x2="17.999987951774528" y2="5.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999988017745636" y1="9.936828613277612" x2="17.999987951774528" y2="9.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999987951774528" y1="13.936828613277612" x2="17.999987951774528" y2="13.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999987951774528" y1="13.936828613277612" x2="9.999987951774528" y2="13.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999987951774528" y1="17.936828613277612" x2="17.999987951774528" y2="17.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999987951774528" y1="17.936828613277612" x2="9.999987951774528" y2="17.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.999988017745636" y="1.936828613277612" width="19.999999934028892" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

NewspaperNews52.displayName = 'NewspaperNews52';

export default NewspaperNews52;
export { NewspaperNews52 };
