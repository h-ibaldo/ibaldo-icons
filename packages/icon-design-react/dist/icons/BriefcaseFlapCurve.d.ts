import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseFlapCurveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseFlapCurve: ForwardRefExoticComponent<BriefcaseFlapCurveProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseFlapCurve;
export { BriefcaseFlapCurve };
