import { forwardRef } from 'react';

const ChartVerticalColumnsCircleCheck = forwardRef(({
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
    <polyline points="16.974731440099276 4.000000003885361 18.974731440099276 6.000000003885361 21.974731440099276 3.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="5.974731440099276" y="11.000000003885361" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.974731440099276" y="7.000000003885361" width="4" height="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="13.974731440099276" y="9.000000003885361" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.974731440099276,2.207885746076499c-.646850585939319-.131896972659888-1.314147949209655-.207885742191138-2-.207885742191138C6.451904291659957,2.000000003885361,1.974731440099276,6.477111820295249,1.974731440099276,12.000000003885361c0,5.522827148441138,4.477172851560681,10,10,10,5.522827148450233,0,10-4.477172851558862,10-10,0-1.04638671875-.165893554689319-2.052795410159888-.465209960939319-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartVerticalColumnsCircleCheck.displayName = 'ChartVerticalColumnsCircleCheck';

export default ChartVerticalColumnsCircleCheck;
export { ChartVerticalColumnsCircleCheck };
