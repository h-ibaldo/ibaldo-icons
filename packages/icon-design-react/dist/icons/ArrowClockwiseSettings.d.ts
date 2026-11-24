import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseSettings: ForwardRefExoticComponent<ArrowClockwiseSettingsProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseSettings;
export { ArrowClockwiseSettings };
