import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopArrowUpRight: ForwardRefExoticComponent<LaptopArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default LaptopArrowUpRight;
export { LaptopArrowUpRight };
