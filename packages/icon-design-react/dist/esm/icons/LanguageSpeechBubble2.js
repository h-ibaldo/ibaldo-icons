import { forwardRef } from 'react';

const LanguageSpeechBubble2 = forwardRef(({
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
    <line x1="11.999999989317075" y1="7.997562036179261" x2="18.999999989317075" y2="7.997562036179261" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999989317075" y1="5.997562036179261" x2="14.999999989317075" y2="7.997562036179261" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.999999989317075,17.997562036179261h-.99999510293128l-.00000489706872,4-5.000001320950105-4h-7.999998679049895c-1.656854249500611,0-3-1.343145750505755-3-3V4.997562036179261c0-1.656854249493335,1.343145750499389-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v10c0,1.656854249494245-1.343145750510303,3-3,3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.999999989317075,13.997562036179261v-6.000001999999768c0-1.104568395091519-.895429604901437-1.999998000000232-1.999997999992047-1.999998000000232h-.00000400000863c-1.104568395079696,0-1.999997999999323.895429604908713-1.999997999999323,1.999998000000232v6.000001999999768" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.999999989317075" y1="10.997562036179261" x2="8.999999989317075" y2="10.997562036179261" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.974731434625937,7.997562036179261c0,2-2,5-5,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.095458973695713,10.997562036179261c.878051757810681,1.272705078125,2.215942382810681,2.445556640625,3.879272460930224,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LanguageSpeechBubble2.displayName = 'LanguageSpeechBubble2';

export default LanguageSpeechBubble2;
export { LanguageSpeechBubble2 };
