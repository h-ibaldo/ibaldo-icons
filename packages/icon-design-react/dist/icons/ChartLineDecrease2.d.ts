import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineDecrease2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineDecrease2: ForwardRefExoticComponent<ChartLineDecrease2Props & RefAttributes<SVGSVGElement>>;

export default ChartLineDecrease2;
export { ChartLineDecrease2 };
