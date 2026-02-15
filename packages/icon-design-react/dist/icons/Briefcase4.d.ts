import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Briefcase4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Briefcase4: ForwardRefExoticComponent<Briefcase4Props & RefAttributes<SVGSVGElement>>;

export default Briefcase4;
export { Briefcase4 };
