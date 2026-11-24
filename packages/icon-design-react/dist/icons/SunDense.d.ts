import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunDenseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunDense: ForwardRefExoticComponent<SunDenseProps & RefAttributes<SVGSVGElement>>;

export default SunDense;
export { SunDense };
