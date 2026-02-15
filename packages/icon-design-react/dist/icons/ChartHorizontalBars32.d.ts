import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartHorizontalBars32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartHorizontalBars32: ForwardRefExoticComponent<ChartHorizontalBars32Props & RefAttributes<SVGSVGElement>>;

export default ChartHorizontalBars32;
export { ChartHorizontalBars32 };
