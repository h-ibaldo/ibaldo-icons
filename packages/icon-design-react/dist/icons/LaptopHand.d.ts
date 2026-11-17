import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopHandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopHand: ForwardRefExoticComponent<LaptopHandProps & RefAttributes<SVGSVGElement>>;

export default LaptopHand;
export { LaptopHand };
