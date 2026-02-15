import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Briefcase: ForwardRefExoticComponent<BriefcaseProps & RefAttributes<SVGSVGElement>>;

export default Briefcase;
export { Briefcase };
