import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseClose: ForwardRefExoticComponent<BriefcaseCloseProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseClose;
export { BriefcaseClose };
