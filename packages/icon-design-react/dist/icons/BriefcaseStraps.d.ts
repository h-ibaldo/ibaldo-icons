import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseStrapsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseStraps: ForwardRefExoticComponent<BriefcaseStrapsProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseStraps;
export { BriefcaseStraps };
