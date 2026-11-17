import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcasePocketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcasePocket: ForwardRefExoticComponent<BriefcasePocketProps & RefAttributes<SVGSVGElement>>;

export default BriefcasePocket;
export { BriefcasePocket };
