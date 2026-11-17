import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseBeltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseBelt: ForwardRefExoticComponent<BriefcaseBeltProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseBelt;
export { BriefcaseBelt };
