import { forwardRef } from 'react';

const Cursor62 = forwardRef(({
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
    <path d="M13.922229228690412,14.257451920248059l3.784790039058862-1.69091796875c.329345703121362-.147094726560681.3955078125-.585876464849207.124206542970569-.823608398439319L6.820605693530524,2.094365982748059c-.319702148441138-.280212402349207-.82061767578125-.053161621099207-.82061767578125.372009277340112v14.567626953119543c0,.358337402351026.369201660150793.597778320319776.696411132810681.451599121101026l3.612854003909888-1.61407470703125,2.724853515619543,6.099243164060681,3.612976074220569-1.614135742189319-2.724853515619543-6.099182128900793Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cursor62.displayName = 'Cursor62';

export default Cursor62;
export { Cursor62 };
