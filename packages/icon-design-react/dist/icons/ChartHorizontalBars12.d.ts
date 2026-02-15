import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartHorizontalBars12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartHorizontalBars12: ForwardRefExoticComponent<ChartHorizontalBars12Props & RefAttributes<SVGSVGElement>>;

export default ChartHorizontalBars12;
export { ChartHorizontalBars12 };
