import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopBagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopBag: ForwardRefExoticComponent<LaptopBagProps & RefAttributes<SVGSVGElement>>;

export default LaptopBag;
export { LaptopBag };
