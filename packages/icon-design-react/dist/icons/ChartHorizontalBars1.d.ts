import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartHorizontalBars1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartHorizontalBars1: ForwardRefExoticComponent<ChartHorizontalBars1Props & RefAttributes<SVGSVGElement>>;

export default ChartHorizontalBars1;
export { ChartHorizontalBars1 };
