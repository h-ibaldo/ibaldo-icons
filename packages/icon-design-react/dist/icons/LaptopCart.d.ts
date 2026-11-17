import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopCartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopCart: ForwardRefExoticComponent<LaptopCartProps & RefAttributes<SVGSVGElement>>;

export default LaptopCart;
export { LaptopCart };
