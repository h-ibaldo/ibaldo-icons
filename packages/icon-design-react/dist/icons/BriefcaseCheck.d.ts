import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseCheck: ForwardRefExoticComponent<BriefcaseCheckProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseCheck;
export { BriefcaseCheck };
