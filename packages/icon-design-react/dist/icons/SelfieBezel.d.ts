import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SelfieBezelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SelfieBezel: ForwardRefExoticComponent<SelfieBezelProps & RefAttributes<SVGSVGElement>>;

export default SelfieBezel;
export { SelfieBezel };
