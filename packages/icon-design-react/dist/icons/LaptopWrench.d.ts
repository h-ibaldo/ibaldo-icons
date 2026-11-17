import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopWrenchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopWrench: ForwardRefExoticComponent<LaptopWrenchProps & RefAttributes<SVGSVGElement>>;

export default LaptopWrench;
export { LaptopWrench };
