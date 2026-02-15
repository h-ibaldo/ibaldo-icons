import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSettings4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSettings4: ForwardRefExoticComponent<GearSettings4Props & RefAttributes<SVGSVGElement>>;

export default GearSettings4;
export { GearSettings4 };
