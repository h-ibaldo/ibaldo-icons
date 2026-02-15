import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineIncrease1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineIncrease1: ForwardRefExoticComponent<ChartLineIncrease1Props & RefAttributes<SVGSVGElement>>;

export default ChartLineIncrease1;
export { ChartLineIncrease1 };
