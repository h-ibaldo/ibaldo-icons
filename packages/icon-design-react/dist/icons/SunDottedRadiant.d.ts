import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunDottedRadiantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunDottedRadiant: ForwardRefExoticComponent<SunDottedRadiantProps & RefAttributes<SVGSVGElement>>;

export default SunDottedRadiant;
export { SunDottedRadiant };
