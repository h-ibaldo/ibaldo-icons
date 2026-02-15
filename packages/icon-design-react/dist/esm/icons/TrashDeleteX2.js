import { forwardRef } from 'react';

const TrashDeleteX2 = forwardRef(({
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
    <path d="M4.999999990141077,6.000000000901309l.00000000062937,13.999999999996362c.000000000049113,1.104569499661011.895430500419025,1.999999999959982,2.00000000008913,1.999999999911779l10-.0000000004502c1.104569499661011-.000000000049113,1.999999999959982-.89543050042812,1.99999999991087-2.00000000008913l-.00000000062937-13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.999999990141077" y1="6.00000000018008" x2="2.999999990141077" y2="6.000000000988621" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.999999990141077,6.00000000071941l-.000000000101863-2.353921007720601c-.000000000049113-.909104324452528.736974667750474-1.646078992312141,1.646078992200273-1.646078992353978l2.707842015441202-.000000000121872c.9091043244498-.000000000041837,1.646078992309413.736974667755021,1.646078992358525,1.64607899220573l.000000000101863,2.35392100772242" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999990630386" y1="17.0000000004502" x2="8.999999990359356" y2="11.000000000717591" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999990499418" y1="17.000000000584805" x2="14.999999990499418" y2="11.000000000582077" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TrashDeleteX2.displayName = 'TrashDeleteX2';

export default TrashDeleteX2;
export { TrashDeleteX2 };
