import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SirenFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SirenFlat: ForwardRefExoticComponent<SirenFlatProps & RefAttributes<SVGSVGElement>>;

export default SirenFlat;
export { SirenFlat };
