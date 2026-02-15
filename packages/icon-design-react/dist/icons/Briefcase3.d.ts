import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Briefcase3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Briefcase3: ForwardRefExoticComponent<Briefcase3Props & RefAttributes<SVGSVGElement>>;

export default Briefcase3;
export { Briefcase3 };
