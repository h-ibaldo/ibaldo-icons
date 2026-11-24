import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunShortDenseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunShortDense: ForwardRefExoticComponent<SunShortDenseProps & RefAttributes<SVGSVGElement>>;

export default SunShortDense;
export { SunShortDense };
