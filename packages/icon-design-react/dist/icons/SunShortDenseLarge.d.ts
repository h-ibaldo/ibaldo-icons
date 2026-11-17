import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunShortDenseLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunShortDenseLarge: ForwardRefExoticComponent<SunShortDenseLargeProps & RefAttributes<SVGSVGElement>>;

export default SunShortDenseLarge;
export { SunShortDenseLarge };
