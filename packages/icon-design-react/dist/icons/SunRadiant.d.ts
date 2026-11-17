import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunRadiantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunRadiant: ForwardRefExoticComponent<SunRadiantProps & RefAttributes<SVGSVGElement>>;

export default SunRadiant;
export { SunRadiant };
