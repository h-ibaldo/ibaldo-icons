import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpRectangleDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpRectangleDot: ForwardRefExoticComponent<ChartArrowUpRectangleDotProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpRectangleDot;
export { ChartArrowUpRectangleDot };
