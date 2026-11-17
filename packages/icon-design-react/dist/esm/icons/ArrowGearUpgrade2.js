import { forwardRef } from 'react';

const ArrowGearUpgrade2 = forwardRef(({
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
    <polyline points="19.000000000029104 1.999999999979991 19.000000000029104 5.999999999979991 15.000000000029104 5.999999999979991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <circle cx="16.500000000029104" cy="16.999999999979991" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.236755371119216 19.157409667948741 20.580139160188992 19.932983398417491 21.080139160188992 19.066955566386241 19.745483398470242 18.296386718729991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.000000000029104 20.449584960917491 16.000000000029104 21.999999999979991 17.000000000029104 21.999999999979991 17.000000000029104 20.449584960917491" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.254516601589785 18.296386718729991 11.919860839869216 19.066955566386241 12.419860839869216 19.932983398417491 13.763244628938992 19.157409667948741" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.763244628938992 14.842590332011241 12.419860839869216 14.066955566386241 11.919860839869216 14.932983398417491 13.254577636749673 15.703552246073741" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.000000000029104 13.550415039042491 17.000000000029104 11.999999999979991 16.000000000029104 11.999999999979991 16.000000000029104 13.550415039042491" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.745422363310354 15.703552246073741 21.080139160188992 14.932983398417491 20.580139160188992 14.066955566386241 19.236755371119216 14.842590332011241" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M19.000000000029104,5.683532714823741c-1.738037109378638-2.23779296875-4.447204589840112-3.68353271484375-7.5-3.68353271484375C6.253295898470242,1.999999999979991,2.000000000029104,6.253295898417491,2.000000000029104,11.499999999979991c0,4.3800048828125,2.96826171875,8.05755615234375,7,9.15643310546875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowGearUpgrade2.displayName = 'ArrowGearUpgrade2';

export default ArrowGearUpgrade2;
export { ArrowGearUpgrade2 };
