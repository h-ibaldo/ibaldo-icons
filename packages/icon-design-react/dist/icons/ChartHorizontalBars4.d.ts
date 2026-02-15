import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartHorizontalBars4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartHorizontalBars4: ForwardRefExoticComponent<ChartHorizontalBars4Props & RefAttributes<SVGSVGElement>>;

export default ChartHorizontalBars4;
export { ChartHorizontalBars4 };
