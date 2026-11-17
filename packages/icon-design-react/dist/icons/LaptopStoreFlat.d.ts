import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopStoreFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopStoreFlat: ForwardRefExoticComponent<LaptopStoreFlatProps & RefAttributes<SVGSVGElement>>;

export default LaptopStoreFlat;
export { LaptopStoreFlat };
