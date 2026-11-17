import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpCircleMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpCircleMinus: ForwardRefExoticComponent<ChartArrowUpCircleMinusProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpCircleMinus;
export { ChartArrowUpCircleMinus };
