import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseEavesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseEaves: ForwardRefExoticComponent<HouseEavesProps & RefAttributes<SVGSVGElement>>;

export default HouseEaves;
export { HouseEaves };
