import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartPie1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartPie1: ForwardRefExoticComponent<ChartPie1Props & RefAttributes<SVGSVGElement>>;

export default ChartPie1;
export { ChartPie1 };
