import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunGearSettings2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunGearSettings2: ForwardRefExoticComponent<SunGearSettings2Props & RefAttributes<SVGSVGElement>>;

export default SunGearSettings2;
export { SunGearSettings2 };
