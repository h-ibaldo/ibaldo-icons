import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunDottedRadiantLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunDottedRadiantLarge: ForwardRefExoticComponent<SunDottedRadiantLargeProps & RefAttributes<SVGSVGElement>>;

export default SunDottedRadiantLarge;
export { SunDottedRadiantLarge };
