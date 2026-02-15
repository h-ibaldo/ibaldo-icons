import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartHorizontalBars2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartHorizontalBars2: ForwardRefExoticComponent<ChartHorizontalBars2Props & RefAttributes<SVGSVGElement>>;

export default ChartHorizontalBars2;
export { ChartHorizontalBars2 };
