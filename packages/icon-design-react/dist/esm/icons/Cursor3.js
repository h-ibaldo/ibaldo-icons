import { forwardRef } from 'react';

const Cursor3 = forwardRef(({
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
    <path d="M18.602863429729041,21.970769791338171l-5.944931743948473-5.944946352319675-3.372822648379952,3.353468364019136c-.260988427220582.259490796081081-.702493618460721.165790130511596-.835588424410162-.177336966968141L2.035765456739682,2.666875387758409c-.160409950069152-.413547321981241.246780838440827-.82073816177035.660328127929461-.660328127929461l16.535077575801552,6.413758283339121c.343126820398538.133094778449959.436827578068915.574599517780371.177337236698804.835588018799172l-3.353455051499623,3.372816122981021,5.944931743950292,5.944946352319675-3.397121659891127,3.397113754070233Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cursor3.displayName = 'Cursor3';

export default Cursor3;
export { Cursor3 };
