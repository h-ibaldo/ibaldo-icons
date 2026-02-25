import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Briefcase42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Briefcase42: ForwardRefExoticComponent<Briefcase42Props & RefAttributes<SVGSVGElement>>;

export default Briefcase42;
export { Briefcase42 };
