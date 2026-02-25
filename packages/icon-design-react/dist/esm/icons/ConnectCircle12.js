import { forwardRef } from 'react';

const ConnectCircle12 = forwardRef(({
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
    <circle cx="11.99999999963984" cy="19.000500926547829" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="18.928203230157123" cy="7.000500926965742" r="2.999999999995697" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="5.07179676984515" cy="7.000500925717915" r="2.999999999999317" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.942877875369959,18.433959960938409c2.96044921875-1.173217773440228,5.05712890625-4.056030273440228,5.05712890625-7.433959960940228,0-.397216796880457-.03857421875-.784423828130457-.094482421880457-1.166015625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.094489203489502,9.833984374998181c-.055908203119543.381591796869543-.094482421869543.768798828119543-.094482421869543,1.166015625,0,3.3779296875,2.0966796875,6.2607421875,5.05712890625,7.433959960940228" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.966315375369959,4.735107421867724c-1.364990234380457-1.08349609375-3.08837890625-1.735107421869543-4.96630859375-1.735107421869543s-3.601318359380457.651611328119543-4.96630859375,1.735107421869543" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ConnectCircle12.displayName = 'ConnectCircle12';

export default ConnectCircle12;
export { ConnectCircle12 };
