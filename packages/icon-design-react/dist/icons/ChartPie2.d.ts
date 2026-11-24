import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartPie2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartPie2: ForwardRefExoticComponent<ChartPie2Props & RefAttributes<SVGSVGElement>>;

export default ChartPie2;
export { ChartPie2 };
