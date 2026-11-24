import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunSpokeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunSpoke: ForwardRefExoticComponent<SunSpokeProps & RefAttributes<SVGSVGElement>>;

export default SunSpoke;
export { SunSpoke };
