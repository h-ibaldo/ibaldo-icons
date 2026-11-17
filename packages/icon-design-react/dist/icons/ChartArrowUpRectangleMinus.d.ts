import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpRectangleMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpRectangleMinus: ForwardRefExoticComponent<ChartArrowUpRectangleMinusProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpRectangleMinus;
export { ChartArrowUpRectangleMinus };
