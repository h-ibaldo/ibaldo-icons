import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunGearSettings1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunGearSettings1: ForwardRefExoticComponent<SunGearSettings1Props & RefAttributes<SVGSVGElement>>;

export default SunGearSettings1;
export { SunGearSettings1 };
