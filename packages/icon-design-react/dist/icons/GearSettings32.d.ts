import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSettings32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSettings32: ForwardRefExoticComponent<GearSettings32Props & RefAttributes<SVGSVGElement>>;

export default GearSettings32;
export { GearSettings32 };
