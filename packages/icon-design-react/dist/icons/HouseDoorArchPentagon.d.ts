import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseDoorArchPentagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseDoorArchPentagon: ForwardRefExoticComponent<HouseDoorArchPentagonProps & RefAttributes<SVGSVGElement>>;

export default HouseDoorArchPentagon;
export { HouseDoorArchPentagon };
