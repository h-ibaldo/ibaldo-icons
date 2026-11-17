import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunDotted: ForwardRefExoticComponent<SunDottedProps & RefAttributes<SVGSVGElement>>;

export default SunDotted;
export { SunDotted };
