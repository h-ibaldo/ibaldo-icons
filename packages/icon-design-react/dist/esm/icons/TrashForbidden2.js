import { forwardRef } from 'react';

const TrashForbidden2 = forwardRef(({
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
    <polyline points="21.974731449689898 3.999999999111424 14.974731449689898 3.999999999427018 14.974731449599858 1.999999999427018 8.974731449599858 1.999999999697138 8.974731449689898 3.999999999697138 1.974731449689898 4.000000000009095" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.974731450500258,21.999999999202373l-4,.00000000062937c-1.104569499670106.000000000050022-2.000000000040018-.895430500248949-2.00000000009004-1.99999999990996l-.00000000072032-16.000000000001819" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.974731449689898" y1="3.999999999202373" x2="19.974731450500258" y2="9.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.00766343297505" cy="16.967068017581141" r="5.032931982877244" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.448843098550242" y1="20.525888351846334" x2="20.566483767400314" y2="13.408247683318223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TrashForbidden2.displayName = 'TrashForbidden2';

export default TrashForbidden2;
export { TrashForbidden2 };
