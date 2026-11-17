import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseCornersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseCorners: ForwardRefExoticComponent<BriefcaseCornersProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseCorners;
export { BriefcaseCorners };
