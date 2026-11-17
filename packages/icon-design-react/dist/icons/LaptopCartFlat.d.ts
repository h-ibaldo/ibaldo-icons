import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopCartFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopCartFlat: ForwardRefExoticComponent<LaptopCartFlatProps & RefAttributes<SVGSVGElement>>;

export default LaptopCartFlat;
export { LaptopCartFlat };
