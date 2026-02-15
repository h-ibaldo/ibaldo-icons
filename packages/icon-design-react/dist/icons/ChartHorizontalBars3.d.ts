import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartHorizontalBars3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartHorizontalBars3: ForwardRefExoticComponent<ChartHorizontalBars3Props & RefAttributes<SVGSVGElement>>;

export default ChartHorizontalBars3;
export { ChartHorizontalBars3 };
