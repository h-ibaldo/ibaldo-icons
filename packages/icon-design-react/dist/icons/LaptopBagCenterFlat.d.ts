import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopBagCenterFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopBagCenterFlat: ForwardRefExoticComponent<LaptopBagCenterFlatProps & RefAttributes<SVGSVGElement>>;

export default LaptopBagCenterFlat;
export { LaptopBagCenterFlat };
