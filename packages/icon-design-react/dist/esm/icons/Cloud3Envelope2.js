import { forwardRef } from 'react';

const Cloud3Envelope2 = forwardRef(({
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
    <rect x="10" y="13.301707105227251" width="12" height="8.698292868270073" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.325256347650793,13.572764234128044l4.9835728771086,4.766210860860156c.38660683541093.369744707911195.995734715061189.369744707911195,1.382341550470301,0l4.983572877110419-4.766210860860156" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.559753417970569,9.999999973497324c-.653015136720569-1.486328125-1.995178222659888-2.599487304698414-3.635498046880457-2.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.418884277340112,1.717834472650793,4.43585205078125,4,4.89923095703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cloud3Envelope2.displayName = 'Cloud3Envelope2';

export default Cloud3Envelope2;
export { Cloud3Envelope2 };
