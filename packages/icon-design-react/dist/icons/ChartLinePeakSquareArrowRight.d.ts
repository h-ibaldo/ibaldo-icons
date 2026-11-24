import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakSquareArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakSquareArrowRight: ForwardRefExoticComponent<ChartLinePeakSquareArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakSquareArrowRight;
export { ChartLinePeakSquareArrowRight };
