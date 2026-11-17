import { forwardRef } from 'react';

const TrashForbidden1 = forwardRef(({
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
    <path d="M8.974731450170111,22.000000000459295h-2.000000000120053c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.974731450050058" y1="6.000000000462023" x2="16.974731450050058" y2="9.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731450050058" y1="6.000000000462023" x2="18.974731450050058" y2="6.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.974731450050058,6.000000000462023v-2.35392100772242c0-.909104324453438-.7369746678296-1.646078992280309-1.646078992280309-1.646078992280309h-2.707842015440292c-.9091043244498,0-1.646078992279399.736974667826871-1.646078992279399,1.646078992280309v2.35392100772242" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.941799467220108" cy="17.032932035377598" r="5.032931982879632" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.382979132789842" y1="20.591752369644382" x2="19.500619801639914" y2="13.474111701115362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TrashForbidden1.displayName = 'TrashForbidden1';

export default TrashForbidden1;
export { TrashForbidden1 };
