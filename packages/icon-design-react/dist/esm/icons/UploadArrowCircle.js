import { forwardRef } from 'react';

const UploadArrowCircle = forwardRef(({
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
    <polyline points="8.974731450203763 5.000000001268745 11.974731451146909 2.000000001537956 14.974731450203763 5.000000001807166" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.97473144849755" y1="12.000000001537956" x2="11.974731451146909" y2="2.000000001537956" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.839050297681752,5.000000001537956c-1.7698974609375,1.80401611328125-2.86431884765625,4.273132324217841-2.86431884765625,7,0,5.522827148436591,4.477172851563409,10,10,10,5.522827148438409,0,10-4.477172851563409,10-10,0-2.726867675782159-1.09442138671875-5.19598388671875-2.86431884765625-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.995361332838911,15.000000001537956c.911437988280341,1.209655761717841,2.347961425780341,2,3.979370117186591,2s3.06793212890625-.790344238282159,3.979370117188409-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

UploadArrowCircle.displayName = 'UploadArrowCircle';

export default UploadArrowCircle;
export { UploadArrowCircle };
