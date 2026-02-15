import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpRectangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpRectangle: ForwardRefExoticComponent<ChartArrowUpRectangleProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpRectangle;
export { ChartArrowUpRectangle };
