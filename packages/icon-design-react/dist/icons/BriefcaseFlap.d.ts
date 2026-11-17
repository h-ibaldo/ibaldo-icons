import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseFlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseFlap: ForwardRefExoticComponent<BriefcaseFlapProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseFlap;
export { BriefcaseFlap };
