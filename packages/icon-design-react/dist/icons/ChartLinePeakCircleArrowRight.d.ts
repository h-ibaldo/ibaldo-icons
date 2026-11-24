import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakCircleArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakCircleArrowRight: ForwardRefExoticComponent<ChartLinePeakCircleArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakCircleArrowRight;
export { ChartLinePeakCircleArrowRight };
