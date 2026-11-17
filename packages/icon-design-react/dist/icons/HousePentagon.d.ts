import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HousePentagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HousePentagon: ForwardRefExoticComponent<HousePentagonProps & RefAttributes<SVGSVGElement>>;

export default HousePentagon;
export { HousePentagon };
