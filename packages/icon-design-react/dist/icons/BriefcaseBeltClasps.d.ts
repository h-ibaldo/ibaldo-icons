import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseBeltClaspsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseBeltClasps: ForwardRefExoticComponent<BriefcaseBeltClaspsProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseBeltClasps;
export { BriefcaseBeltClasps };
