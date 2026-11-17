import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpCircleXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpCircleX: ForwardRefExoticComponent<ChartArrowUpCircleXProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpCircleX;
export { ChartArrowUpCircleX };
