import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseFlapClaspsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseFlapClasps: ForwardRefExoticComponent<BriefcaseFlapClaspsProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseFlapClasps;
export { BriefcaseFlapClasps };
