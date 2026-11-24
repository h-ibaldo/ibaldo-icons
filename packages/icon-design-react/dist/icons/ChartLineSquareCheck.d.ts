import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquareCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquareCheck: ForwardRefExoticComponent<ChartLineSquareCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquareCheck;
export { ChartLineSquareCheck };
