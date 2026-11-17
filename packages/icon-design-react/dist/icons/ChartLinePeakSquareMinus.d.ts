import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakSquareMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakSquareMinus: ForwardRefExoticComponent<ChartLinePeakSquareMinusProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakSquareMinus;
export { ChartLinePeakSquareMinus };
