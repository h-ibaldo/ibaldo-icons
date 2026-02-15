import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpCircle: ForwardRefExoticComponent<ChartArrowUpCircleProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpCircle;
export { ChartArrowUpCircle };
