import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseDoorArchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseDoorArch: ForwardRefExoticComponent<HouseDoorArchProps & RefAttributes<SVGSVGElement>>;

export default HouseDoorArch;
export { HouseDoorArch };
