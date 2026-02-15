import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseHome2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseHome2: ForwardRefExoticComponent<HouseHome2Props & RefAttributes<SVGSVGElement>>;

export default HouseHome2;
export { HouseHome2 };
