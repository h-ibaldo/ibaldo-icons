import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseFlapClaspProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseFlapClasp: ForwardRefExoticComponent<BriefcaseFlapClaspProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseFlapClasp;
export { BriefcaseFlapClasp };
