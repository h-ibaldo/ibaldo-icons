import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseSettingsCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseSettingsCorner: ForwardRefExoticComponent<ArrowClockwiseSettingsCornerProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseSettingsCorner;
export { ArrowClockwiseSettingsCorner };
