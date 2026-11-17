import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseSatchelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseSatchel: ForwardRefExoticComponent<BriefcaseSatchelProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseSatchel;
export { BriefcaseSatchel };
