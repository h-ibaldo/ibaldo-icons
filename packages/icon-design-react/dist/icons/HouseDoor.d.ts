import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseDoorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseDoor: ForwardRefExoticComponent<HouseDoorProps & RefAttributes<SVGSVGElement>>;

export default HouseDoor;
export { HouseDoor };
