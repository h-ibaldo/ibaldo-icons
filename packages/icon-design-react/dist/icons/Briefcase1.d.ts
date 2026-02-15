import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Briefcase1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Briefcase1: ForwardRefExoticComponent<Briefcase1Props & RefAttributes<SVGSVGElement>>;

export default Briefcase1;
export { Briefcase1 };
