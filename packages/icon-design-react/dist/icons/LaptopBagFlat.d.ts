import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopBagFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopBagFlat: ForwardRefExoticComponent<LaptopBagFlatProps & RefAttributes<SVGSVGElement>>;

export default LaptopBagFlat;
export { LaptopBagFlat };
