import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakSquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakSquareDot: ForwardRefExoticComponent<ChartLinePeakSquareDotProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakSquareDot;
export { ChartLinePeakSquareDot };
