import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House: ForwardRefExoticComponent<HouseProps & RefAttributes<SVGSVGElement>>;

export default House;
export { House };
