import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseHome3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseHome3: ForwardRefExoticComponent<HouseHome3Props & RefAttributes<SVGSVGElement>>;

export default HouseHome3;
export { HouseHome3 };
