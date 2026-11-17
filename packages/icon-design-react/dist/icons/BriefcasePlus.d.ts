import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcasePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcasePlus: ForwardRefExoticComponent<BriefcasePlusProps & RefAttributes<SVGSVGElement>>;

export default BriefcasePlus;
export { BriefcasePlus };
