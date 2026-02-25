import { forwardRef } from 'react';

const SubmitForApprovalArrowCheck12 = forwardRef(({
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
    <path d="M21.363210718289338,11.327327209892246L13.192689491479541,2.339753860400378c-.430391198489815-.473430318332248-1.217958051380265-.168951558694971-1.217958051380265.470870955796272v3.189375187688711H2.974731440099276c-.552284749819592,0-1,.447715250171314-1,1v10c0,.552284749832324.447715250180408,1,1,1h9v3.189375187688711c0,.639822514491243.78756685289045.944301274132158,1.217958051380265.470870955796272l8.170521226809797-8.98757334948823c.346746568811795-.38142122568388.346746568811795-.963924362305988,0-1.345345587989868Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.974731440099276 12.000000003885361 8.974731440099276 14.000000003885361 12.974731440099276 10.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SubmitForApprovalArrowCheck12.displayName = 'SubmitForApprovalArrowCheck12';

export default SubmitForApprovalArrowCheck12;
export { SubmitForApprovalArrowCheck12 };
