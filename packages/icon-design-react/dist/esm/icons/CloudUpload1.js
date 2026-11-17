import { forwardRef } from 'react';

const CloudUpload1 = forwardRef(({
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
    <polyline points="10 11.999999999998181 11.999999987390765 9.999999999998181 14 11.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999987390765" y1="14.999999999998181" x2="11.999999987390765" y2="9.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18,10.999999999998181h-.025207519540345c.014892578130457-.164916992180224.025207519540345-.331176757809772.025207519540345-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699220569,0-3.987365722659888,1.222900390630457-4.897277832040345,3.005187988270336-.034545898430224-.000610351560681-.068054199209655-.005187988270336-.102722167959655-.005187988270336-3.037536621101026,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378898974,5.5,5.5,5.5h10.5c2.209167480459655,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519540345-4-4-4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CloudUpload1.displayName = 'CloudUpload1';

export default CloudUpload1;
export { CloudUpload1 };
