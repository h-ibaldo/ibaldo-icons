import { forwardRef } from 'react';

const AirplaySignal4 = forwardRef(({
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
    <path d="M11.240743369540724,14.885795934025737l-3.825779363240144,4.463409257118656c-.556005705740972.648673323361436-.095096618069874,1.650791373456741.759256602359528,1.650791373456741h7.651558726489384c.854353220420307,0,1.3152623081005-1.002118050095305.759256602361347-1.650791373456741l-3.825779363240144-4.463409257118656c-.399095573189697-.465611502057982-1.119417631540273-.465611502057982-1.51851320472997,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.514718597849424,5.514715190171955c4.686291500860534-4.686291500649531,12.284271247830475-4.686291500478546,16.970562748480006.000000000381988" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.343145722530608,8.343142314980469c3.124194333910054-3.124194333766354,8.189514165220316-3.124194333649939,11.313708498990309.000000000254659" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.171572847209973,11.17156943979171c1.562097166959575-1.562097166882268,4.094757082610158-1.562097166827698,5.656854249489697.000000000124601" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

AirplaySignal4.displayName = 'AirplaySignal4';

export default AirplaySignal4;
export { AirplaySignal4 };
