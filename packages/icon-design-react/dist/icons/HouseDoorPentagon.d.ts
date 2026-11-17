import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseDoorPentagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseDoorPentagon: ForwardRefExoticComponent<HouseDoorPentagonProps & RefAttributes<SVGSVGElement>>;

export default HouseDoorPentagon;
export { HouseDoorPentagon };
