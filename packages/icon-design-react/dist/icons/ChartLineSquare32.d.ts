import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare32: ForwardRefExoticComponent<ChartLineSquare32Props & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare32;
export { ChartLineSquare32 };
