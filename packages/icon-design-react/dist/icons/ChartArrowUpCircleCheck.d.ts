import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpCircleCheck: ForwardRefExoticComponent<ChartArrowUpCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpCircleCheck;
export { ChartArrowUpCircleCheck };
