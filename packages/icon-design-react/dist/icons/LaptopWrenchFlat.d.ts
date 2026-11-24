import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopWrenchFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopWrenchFlat: ForwardRefExoticComponent<LaptopWrenchFlatProps & RefAttributes<SVGSVGElement>>;

export default LaptopWrenchFlat;
export { LaptopWrenchFlat };
