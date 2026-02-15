import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Briefcase2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Briefcase2: ForwardRefExoticComponent<Briefcase2Props & RefAttributes<SVGSVGElement>>;

export default Briefcase2;
export { Briefcase2 };
