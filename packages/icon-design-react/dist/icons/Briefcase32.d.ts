import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Briefcase32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Briefcase32: ForwardRefExoticComponent<Briefcase32Props & RefAttributes<SVGSVGElement>>;

export default Briefcase32;
export { Briefcase32 };
