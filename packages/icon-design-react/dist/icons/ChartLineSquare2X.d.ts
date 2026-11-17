import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare2XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare2X: ForwardRefExoticComponent<ChartLineSquare2XProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare2X;
export { ChartLineSquare2X };
