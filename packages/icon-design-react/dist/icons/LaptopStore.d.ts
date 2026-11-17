import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopStoreProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopStore: ForwardRefExoticComponent<LaptopStoreProps & RefAttributes<SVGSVGElement>>;

export default LaptopStore;
export { LaptopStore };
