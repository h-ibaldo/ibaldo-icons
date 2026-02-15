import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineIncrease2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineIncrease2: ForwardRefExoticComponent<ChartLineIncrease2Props & RefAttributes<SVGSVGElement>>;

export default ChartLineIncrease2;
export { ChartLineIncrease2 };
