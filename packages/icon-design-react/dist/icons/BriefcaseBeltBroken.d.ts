import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseBeltBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseBeltBroken: ForwardRefExoticComponent<BriefcaseBeltBrokenProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseBeltBroken;
export { BriefcaseBeltBroken };
