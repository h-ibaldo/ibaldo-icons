import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSettings2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSettings2: ForwardRefExoticComponent<GearSettings2Props & RefAttributes<SVGSVGElement>>;

export default GearSettings2;
export { GearSettings2 };
