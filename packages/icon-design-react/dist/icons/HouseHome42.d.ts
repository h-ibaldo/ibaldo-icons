import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseHome42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseHome42: ForwardRefExoticComponent<HouseHome42Props & RefAttributes<SVGSVGElement>>;

export default HouseHome42;
export { HouseHome42 };
