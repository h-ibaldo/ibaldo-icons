import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunDottedDenseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunDottedDense: ForwardRefExoticComponent<SunDottedDenseProps & RefAttributes<SVGSVGElement>>;

export default SunDottedDense;
export { SunDottedDense };
